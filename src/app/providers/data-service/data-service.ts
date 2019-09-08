import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { Muscles } from '../../models/enums';
import { WorkoutBean } from '../../models/Workout';
import { defaultWorkouts } from '../../constants/defaultWorkouts';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';
import { defaultExerciseMedia } from '../../constants/defaultExerciseMedia';
import { ExerciseMedia } from '../../models/ExerciseMedia';
import { IAppState } from '../../store/state/app.state';
import {
  ResetWorkouts,
  WorkoutsUpdated,
  ResetImages,
  ImagesUpdated
} from 'src/app/store/actions/data.actions';
import { ExerciseBean } from 'src/app/models/Exercise';
import { selectHasDataBeenLoaded } from 'src/app/store/selectors/data.selectors';

const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

@Injectable()
export class DataServiceProvider {

  private _images: ExerciseMedia[];
  // private hasDataBeenLoaded = false;

  constructor(
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage,
    private store: Store<IAppState>) {
    this._images = [];
    // this.store.select(selectHasDataBeenLoaded)
    //   .subscribe(async loaded => {
    //     if (loaded) {
    //       this.hasDataBeenLoaded = loaded;
    //     }
    //   });
  }

  async getWorkouts(): Promise<WorkoutsDataMaps> {
    // if (!this.hasDataBeenLoaded) {
      return await this.initWorkouts();
    // }
    // return this._workoutsDataMaps;
  }

  // async getWorkout(id: string): Promise<WorkoutBean> {
  //   if (!this.hasDataBeenLoaded) {
  //     await this.initWorkouts();
  //   }
  //   console.log(`servicing workout ${id} from `, this._workoutsDataMaps.workouts);
  //   const workout = this._workoutsDataMaps.workouts[id];
  //   console.log(`found workout ${id}`, workout);
  //   return workout;
  // }

  async initWorkouts(): Promise<WorkoutsDataMaps> {
    await this.storage.ready();
    let workoutsDataMaps = await this.storage.get(WORKOUTS_STORAGE_KEY);
    if (!workoutsDataMaps && Object.keys(workoutsDataMaps.workouts).length === 0) {
      workoutsDataMaps = await this.resetWorkouts();
    } else if (this.isMobile) {
      this.UpdateImagesInWorkouts(workoutsDataMaps);
      await this.saveWorkouts(workoutsDataMaps);
    }
    console.log('loaded cached workouts', Object.keys(workoutsDataMaps.workouts));
    return workoutsDataMaps;
  }

  async resetWorkouts(): Promise<WorkoutsDataMaps>  {
    const workoutsDataMaps = defaultWorkouts.flat;
    await this.saveWorkouts(workoutsDataMaps, true);
    console.log('workouts have been reset to default workouts');
    return workoutsDataMaps;
  }


  private UpdateImagesInWorkouts(workoutsDataMaps: WorkoutsDataMaps) {
    const exercises = workoutsDataMaps.exercises.byId;
    for (const id of Object.keys(exercises)) {
      const exe = exercises[id];
      if (!exercises[id].media.isDefault &&
        exe.media.nativePath.indexOf(this.file.dataDirectory) < 0) {
        const oldPath = exe.media.nativePath;
        const name = exe.media.nativePath.substr(exe.media.nativePath.lastIndexOf('/') + 1);
        exe.media.nativePath = this.file.dataDirectory + name;
        exe.media.ionicPath = this.getIonicPath(exe.media.nativePath);
        console.log(`update exercise image path from ${oldPath} to ${exe.media.nativePath}`);
      }
    }
  }

  async saveWorkouts(workoutsDataMaps: WorkoutsDataMaps, haveWorkoutsBeenReset: boolean = false) {
    await this.storage.ready();
    
    await this.storage.set(WORKOUTS_STORAGE_KEY, workoutsDataMaps);
    console.log('workouts have been saved');
    if (haveWorkoutsBeenReset) {
      this.store.dispatch(new ResetWorkouts());
    } else {
      // this.store.dispatch(new WorkoutsUpdated());
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
    console.log('data service - returning _images');
    return this._images;
  }

  async setImageMuscles(name: string, exerciseMuscleFilter: Muscles[]) {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      imageToSet.muscles = exerciseMuscleFilter;
      console.log(`data service - setImageMuscles found ${name}`, imageToSet.muscles);
      await this.saveImages();
    }
  }

  getExerciseMusclesFilterFromImage(name: string): Muscles[] {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      return imageToSet.muscles;
    }
  }

  async loadImages() {
    await this.displayPlatform();
    await this.storage.ready();
    this._images = await this.storage.get(IMAGES_STORAGE_KEY) || [];

    if (!this._images.length) {
      console.log('DS: limages not found is storage, initializing default images...');
      await this.initDefaultImages();
    } else {
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
    this._images = Array.from(defaultExerciseMedia.values()) || [];
    console.log(`initialized ${this._images.length} default images`, this._images);
    await this.saveImages(true);
  }



  async saveImages(imagesHaveBeenReset: boolean = false) {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this._images);
    if (imagesHaveBeenReset) {
      this.store.dispatch(new ResetImages());
    } else {
      this.store.dispatch(new ImagesUpdated());
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
}
