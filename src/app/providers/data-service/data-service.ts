import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { StateCache } from '../../models/StateCache';
import { Workout } from '../../models/Workout';
import { defaultWorkouts } from '../../constants/defaultWorkouts';
import { defaultExerciseMedia } from '../../constants/defaultExerciseMedia';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { ExerciseSetAction, Muscles } from '../../models/enums';
import { ExerciseMedia } from '../../models/ExerciseMedia';
import * as DefeaultsActions from '../../actions/defaults.actions';
import {
  AppState,
  getHasDefaultWorkoutsBeenReset,
  getHasDefaultImagesBeenReset
} from '../../reducers';


const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

@Injectable()
export class DataServiceProvider {

  private _workouts: Workout[];
  private _images: ExerciseMedia[];
  private state: StateCache;
  workoutPublisher: Subject<ExerciseSetActionEvent>;
  // hasDefaultWorkoutsBeenReset: Observable<boolean>;
  // hasDefaultImagesBeenReset: Observable<boolean>;

  constructor(
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage,
    private store: Store<AppState>) {
    this._images = [];
    this._workouts = [];
    this.state = new StateCache();
    this.workoutPublisher = new Subject();
    // this.hasDefaultWorkoutsBeenReset = this.store.select(getHasDefaultWorkoutsBeenReset);
    // this.hasDefaultImagesBeenReset = this.store.select(getHasDefaultImagesBeenReset);
  }

  getHasDefaultWorkoutsBeenReset(): Observable<boolean> {
    return this.store.select(getHasDefaultWorkoutsBeenReset);
  }
  getHasDefaultImagesBeenReset(): Observable<boolean> {
    return this.store.select(getHasDefaultImagesBeenReset);
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
    await this.storage.set(WORKOUTS_STORAGE_KEY, this._workouts);
    console.log('workouts have been reset to default workouts');
    this.store.dispatch(new DefeaultsActions.ResetDefaultWorkouts());
    this.workoutPublisher.next(new ExerciseSetActionEvent(ExerciseSetAction.WorkoutReset, null, null, null));
  }

  async saveWorkouts() {
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, this._workouts);
    console.log('workouts have been saved');
    this.store.dispatch(new DefeaultsActions.UpdatedDefaultWorkouts());
  }

  async resetImages() {
    this._images = [];
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    await this.initImages();
    this.store.dispatch(new DefeaultsActions.ResetDefaultImages());
    this.workoutPublisher.next(new ExerciseSetActionEvent(ExerciseSetAction.ImagesReset, null, null, null));
    console.log('images have been reset');
  }

  async getImages(): Promise<ExerciseMedia[]> {
    if (!this._images.length) {
      await this.initImages();
    }
    return this._images;
  }

  async setImageMuscles(name: string) {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      imageToSet.muscles = [];
      this.exerciseMuscleFilter.forEach(muscle => {
        imageToSet.muscles.push(muscle);
      });
      console.log(`data service - setImageMuscles found ${name}`, imageToSet.muscles);
      await this.saveImages();
    }
  }

  setExerciseMusclesFilterFromImage(name: string) {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      console.log(`data service - setMusclesFilterFromImage for ${imageToSet}`);
      this.state.exerciseMuscleFilter = new Set(imageToSet.muscles);
    }
  }

  async initImages() {
    await this.displayPlatform();
    await this.storage.ready();
    this._images = await this.storage.get(IMAGES_STORAGE_KEY);

    if (!this._images || !this._images.length) {
      this.initDefaultImages();
      return;
    }

    if (this._images.length) {
      console.log(`DS - loaded ${this._images.length} images from storage:`, this._images);
      for (const img of this._images) {
        console.log('DS: loaded images from storage:', img.name, img.muscles);
      }
      if (this.isMobile) {
        console.log(`updating to device data directory ${this.file.dataDirectory}`);
        this.upgradeImages();
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
    this._images = [];
    console.log('initializing saved images from assests...');
    // const images: Map<string, ExerciseMedia> = this.extractUniqueImagesFromWorkouts(defaultWorkouts.workouts);
    this._images = Array.from(defaultExerciseMedia.values());
    console.log(`initialized ${this._images.length} saved images from assests`, this._images);
    await this.saveImages();
  }

  // private extractUniqueImagesFromWorkouts(workouts: Workout[]) {
  //   return defaultExerciseMedia;
  // }

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

  async saveImages() {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this._images);
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
    console.log(`removing image ${name} from library`);
    const imageToRemove = this._images.splice(position, 1)[0];
    await this.saveImages();
    if (this.isMobile && !imageToRemove.isDefault) {
      const path = image.nativePath.substr(0, image.nativePath.lastIndexOf('/') + 1);
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      console.log(`deleting image from ${path} ${name}`);
      await this.file.removeFile(path, name);
    }
  }

  async updateImage(imgEntry: ExerciseMedia, position: number) {
    console.log(`updated image name ${imgEntry.name} as ${this._images[position].ionicPath}`);
    await this.saveImages();
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

  get exerciseMuscleFilter(): Set<Muscles> {
    return this.state.exerciseMuscleFilter;
  }
  set exerciseMuscleFilter(value: Set<Muscles>) {
    this.state.exerciseMuscleFilter = value;
  }

  get libraryMuscleFilter(): Set<Muscles> {
    return this.state.libraryMuscleFilter;
  }
  set libraryMuscleFilter(value: Set<Muscles>) {
    this.state.libraryMuscleFilter = value;
  }

  addMuscleToExerciseMuscleFilter(muscle: Muscles) {
    this.state.addMuscleToExerciseMuscleFilter(muscle);
  }
  deleteMuscleFromExerciseMuscleFilter(muscle: Muscles) {
    this.state.deleteMuscleFromExerciseMuscleFilter(muscle);
  }

  addMuscleToLibraryMuscleFilter(muscle: Muscles) {
    this.state.addMuscleToLibraryMuscleFilter(muscle);
  }
  deleteMuscleFromLibraryMuscleFilter(muscle: Muscles) {
    this.state.deleteMuscleFromLibraryMuscleFilter(muscle);
  }
}
