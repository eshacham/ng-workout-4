import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { deserialize } from 'json-typescript-mapper';
import { StateCache } from '../../models/StateCache';
import { Workout } from '../../models/Workout';
import { DefaultWorkouts } from '../../models/DefaultWorkouts';
import { json } from '../../constants/defaultWorkouts';

const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

export interface SavedImage {
  name: string;
  ionicPath: string;
  nativePath: string;
}

@Injectable()
export class DataServiceProvider {

  private _workouts: Workout[];
  private _images: SavedImage[];
  private defaultWorkouts: DefaultWorkouts;
  private state: StateCache;

  constructor (
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage) {
      console.log('initializing data service');
      this._images = [];
      this._workouts = [];
      this.state = new StateCache();
      this.defaultWorkouts = deserialize(DefaultWorkouts, json);
      console.log('deserialized default workouts', this.defaultWorkouts.workouts.map(w => w.id));
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
    }
    console.log('loaded cached workouts', this._workouts.map(w => w.id));
  }

  async resetWorkouts(): Promise<Workout[]> {
    await this.saveWorkouts(this.defaultWorkouts.workouts);
    console.log('workouts have been reset to default workouts');
    return this._workouts;
  }

  async saveWorkouts(workouts: Workout[] = this._workouts): Promise<Workout[]> {
    this._workouts = workouts;
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, this._workouts);
    console.log('workouts have been saved');
    return this._workouts;
  }

  async resetImages() {
    this._images = [];
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    await this.initImages();
    /// TODO need to notify the client the data has been reset so it will reload it!
    console.log('images have been reset');
  }

  async getImages(): Promise<SavedImage[]> {
    if (!this._images.length) {
      await this.initImages();
    }
    return this._images;
  }

  async initImages() {
    await this.displayPlatform();
    await this.storage.ready();
    this._images = await this.storage.get(IMAGES_STORAGE_KEY);

    if (!this._images || !this._images.length) {
      this.initDefaultImages();
    }

    if (this._images.length) {
      console.log(`loaded ${this._images.length} images from storage:`, JSON.stringify(this._images));
      if (this.isMobile) {
        console.log(`updating to device data directory ${this.file.dataDirectory}`);
        // this.updateImagesPath();
      }
    }
  }

  async initDefaultImages() {
    this._images = [];
    console.log('initializing saved images from assests...');
    const images: Map<string, SavedImage> = new Map();
    for (const workout of this.defaultWorkouts.workouts) {
      for (const day of workout.days) {
        for (const set of day.exerciseSets) {
          for (const exe of set.exercises) {
            const url = exe.imageUrl;
            if (!images[url]) {
              images.set(url, { name: url, ionicPath: url, nativePath: url });
            }
          }
        }
      }
    }
    images.forEach((image: SavedImage) => {
      this._images.push(image);
    });

    console.log(`initialized ${this._images.length} saved images from assests`, JSON.stringify(this._images));
    await this.saveImages();
  }

  async saveImages() {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this._images);
  }

  async saveImage(name: string) {
    const nativePath = this.file.dataDirectory + name;
    const ionicPath = this.getIonicPath(nativePath);

    const newEntry: SavedImage = {
        name: name,
        ionicPath: ionicPath,
        nativePath: nativePath
    };
    console.log('adding image', JSON.stringify(newEntry));
    this._images.push(newEntry);
    await this.saveImages();
  }

  async deleteImage(imgEntry: SavedImage, position: number) {
    this._images.splice(position, 1);
    await this.saveImages();
    if (!this.isWebApp) {
      const correctPath = imgEntry.nativePath.substr(0, imgEntry.nativePath.lastIndexOf('/') + 1);
      await this.file.removeFile(correctPath, imgEntry.name);
    }
  }
  async updateImage(imgEntry: SavedImage, position: number) {
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
  get isMobile()  {
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
}
