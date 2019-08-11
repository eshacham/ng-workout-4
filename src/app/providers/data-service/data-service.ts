import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { StateCache } from '../../models/StateCache';
import { Muscles } from '../../models/enums';
import { Workout } from '../../models/Workout';
import { defaultWorkouts } from '../../constants/defaultWorkouts';
import { defaultExerciseMedia } from '../../constants/defaultExerciseMedia';
import { ExerciseMedia } from '../../models/ExerciseMedia';
import * as DefeaultsActions from '../../actions/defaults.actions';
// import * as MusclesFilterActions from '../../actions/musclesFilter.actions';
import {
  AppState,
  getHasDefaultWorkoutsBeenReset,
  getHasDefaultImagesBeenReset,
  getExerciseMusclesFilterState,
  getLibraryMusclesFilterState
} from '../../reducers';


const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

@Injectable()
export class DataServiceProvider {

  private _workouts: Workout[];
  private _images: ExerciseMedia[];
  private state: StateCache;

  constructor(
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage,
    private store: Store<AppState>) {
    this._images = [];
    this._workouts = [];
    this.state = new StateCache();
  }

  getHasDefaultWorkoutsBeenReset(): Observable<boolean> {
    return this.store.select(getHasDefaultWorkoutsBeenReset);
  }
  getHasDefaultImagesBeenReset(): Observable<boolean> {
    return this.store.select(getHasDefaultImagesBeenReset);
  }
  getExerciseMusclesFilterState(): Observable<Set<Muscles>> {
    return this.store.select(getExerciseMusclesFilterState);
  }
  getLibraryMusclesFilterState(): Observable<Set<Muscles>> {
    return this.store.select(getLibraryMusclesFilterState);
  }

  async getWorkout(id: number): Promise<Workout> {
    if (!this._workouts.length) {
      await this.initWorkouts();
    }
    console.log(`servicing workout ${id} from `, this._workouts);
    const workout = this._workouts.find(w => w.id === id);
    console.log(`found workout ${id}`, workout);
    return workout;
  }

  async getWorkouts(): Promise<Workout[]> {
    if (!this._workouts.length) {
      await this.initWorkouts();
    }
    return this._workouts;
  }

  async initWorkouts() {
    await this.storage.ready();
    this._workouts = await this.storage.get(WORKOUTS_STORAGE_KEY);
    if (!this._workouts || !this._workouts.length) {
      await this.resetWorkouts();
    } else if (this.isMobile) {
      this.UpdateImagesInWorkouts(this._workouts);
      await this.saveWorkouts();
    }
    console.log('loaded cached workouts', this._workouts.map(w => w.id));
  }

  async resetWorkouts() {
    this._workouts = defaultWorkouts.workouts.map(x => Object.assign({}, x)); // deep clone of objects in an array
    await this.saveWorkouts(true);
    console.log('workouts have been reset to default workouts');
  }

  async saveWorkouts(haveWorkoutsBeenReset: boolean = false) {
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, this._workouts);
    console.log('workouts have been saved');
    if (haveWorkoutsBeenReset) {
      this.store.dispatch(new DefeaultsActions.ResetDefaultWorkouts());
    } else {
      this.store.dispatch(new DefeaultsActions.UpdatedDefaultWorkouts());
    }
  }

  async resetImages() {
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    await this.initDefaultImages();
    console.log('images have been reset');
  }

  async getImages(): Promise<ExerciseMedia[]> {
    if (!this._images.length) {
      await this.loadImages();
    }
    return this._images;
  }

  async setImageMuscles(name: string, exerciseMuscleFilter: Set<Muscles>) {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      imageToSet.muscles = [];
      exerciseMuscleFilter.forEach(muscle => {
        imageToSet.muscles.push(muscle);
      });
      console.log(`data service - setImageMuscles found ${name}`, imageToSet.muscles);
      await this.saveImages();
    }
  }

  getExerciseMusclesFilterFromImage(name: string): Set<Muscles> {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    let set: Set<Muscles> = new Set();
    if (imageToSet) {
      // console.log(`data service - setMusclesFilterFromImage for ${imageToSet}`);
      set = new Set(imageToSet.muscles);
      // this.store.dispatch(new MusclesFilterActions.SetExecrciseMuscleFilter(exerciseMuscleFilter));
    }
    return set;
  }

  async loadImages() {
    await this.displayPlatform();
    await this.storage.ready();
    this._images = await this.storage.get(IMAGES_STORAGE_KEY);

    if (!this._images.length) {
      this.initDefaultImages();
      return;
    }

    if (this._images.length) {
      for (const img of this._images) {
        console.log('DS: loaded images from storage:', img.name, img.muscles);
      }
      if (this.isMobile) {
        console.log(`updating to device data directory ${this.file.dataDirectory}`);
        this.upgradeImages();
        await this.saveImages();
      }
    }
  }

  private upgradeImages() {
    const images = this._images.filter(i => !i.isDefault);
    this.updateImagesPath(images);
  }

  private updateImagesPath(images: ExerciseMedia[]) {
    for (const image of images) {
      if (image.nativePath.indexOf(this.file.dataDirectory) < 0) {
        const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
        const oldPath = image.nativePath;
        image.nativePath = this.file.dataDirectory + name;
        image.ionicPath = this.getIonicPath(image.nativePath);
        console.log(`update image path from ${oldPath} to ${image.nativePath}`);
      }
    }
  }

  private async initDefaultImages() {
    this._images = Array.from(defaultExerciseMedia.values());
    console.log(`initialized ${this._images.length} default images`, this._images);
    await this.saveImages(true);
  }

  private UpdateImagesInWorkouts(workouts: Workout[]) {
    for (const workout of workouts) {
      for (const day of workout.days) {
        for (const set of day.exerciseSets) {
          for (const exe of set.exercises) {
            if (!exe.media.isDefault &&
              exe.media.nativePath.indexOf(this.file.dataDirectory) < 0) {
              const oldPath = exe.media.nativePath;
              const name = exe.media.nativePath.substr(exe.media.nativePath.lastIndexOf('/') + 1);
              exe.media.nativePath = this.file.dataDirectory + name;
              exe.media.ionicPath = this.getIonicPath(exe.media.nativePath);
              console.log(`update exercise image path from ${oldPath} to ${exe.media.nativePath}`);
            }
          }
        }
      }
    }
  }

  async saveImages(imagesHaveBeenReset: boolean = false) {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this._images);
    if (imagesHaveBeenReset) {
      this.store.dispatch(new DefeaultsActions.ResetDefaultImages());
    } else {
      this.store.dispatch(new DefeaultsActions.UpdatedDefaultImages());
    }
  }

  async addImage(origImagePath: string, origImageName: string, newImageName: string) {
    await this.file.copyFile(origImagePath, origImageName, this.file.dataDirectory, newImageName);
    const nativePath = this.file.dataDirectory + newImageName;
    console.log(`new image ${origImagePath}/${origImageName} has been copied to ${nativePath}`);

    const newEntry: ExerciseMedia = new ExerciseMedia({
      name: newImageName,
      ionicPath: this.getIonicPath(nativePath),
      nativePath: nativePath,
      isDefault: false,
      muscles: new Set(),
    });
    console.log('adding image', newEntry);
    this._images.push(newEntry);
    await this.saveImages();
  }

  async deleteImage(image: ExerciseMedia, position: number) {
    const imageToRemove = this._images.splice(position, 1)[0];
    await this.saveImages();
    if (this.isMobile && !imageToRemove.isDefault) {
      const path = image.nativePath.substr(0, image.nativePath.lastIndexOf('/') + 1);
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      console.log(`deleting image file ${path}/${name}`);
      await this.file.removeFile(path, name);
    }
  }

  async updateImage(imgEntry: ExerciseMedia, position: number) {
    await this.saveImages();
    console.log(`updated image name ${imgEntry.name} as ${this._images[position].ionicPath}`);
  }

  getIonicPath(img: string) {
    return (img === null) ? '' : this.webview.convertFileSrc(img);
  }

  get isAndriod(): boolean {
    return this.platform.is('android');
  }
  get isIos(): boolean {
    return this.platform.is('ios');
  }
  get isWebApp(): boolean {
    return !this.isMobile;
  }
  get isMobile() {
    return this.isIos || this.isAndriod;
  }
  async displayPlatform() {
    const platformSource = await this.platform.ready();
    console.log(`this app runs on ${platformSource}`);
  }

  setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.state.setLastSelectedWorkoutDay(workoutName, workoutDayIndex);
  }
  getLastSelectedWorkoutDay(workoutName: string): number {
    return this.state.getLastSelectedWorkoutDay(workoutName);
  }

  // get exerciseMuscleFilter(): Set<Muscles> {
  //   return this.state.exerciseMuscleFilter;
  // }
  // set exerciseMuscleFilter(value: Set<Muscles>) {
  //   this.state.exerciseMuscleFilter = value;
  // }

  // get libraryMuscleFilter(): Set<Muscles> {
  //   return this.state.libraryMuscleFilter;
  // }
  // set libraryMuscleFilter(value: Set<Muscles>) {
  //   this.state.libraryMuscleFilter = value;
  // }

  // addMuscleToExerciseMuscleFilter(muscle: Muscles) {
  //   this.state.addMuscleToExerciseMuscleFilter(muscle);
  // }
  // deleteMuscleFromExerciseMuscleFilter(muscle: Muscles) {
  //   this.state.deleteMuscleFromExerciseMuscleFilter(muscle);
  // }

  // addMuscleToLibraryMuscleFilter(muscle: Muscles) {
  //   this.state.addMuscleToLibraryMuscleFilter(muscle);
  // }
  // deleteMuscleFromLibraryMuscleFilter(muscle: Muscles) {
  //   this.state.deleteMuscleFromLibraryMuscleFilter(muscle);
  // }
}
