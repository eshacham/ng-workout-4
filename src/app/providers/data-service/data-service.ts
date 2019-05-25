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
  path: string;
  filePath: string;
}

@Injectable()
export class DataServiceProvider {

  private workouts: Workout[];
  private images: SavedImage[];
  private defaultWorkouts: DefaultWorkouts;

  constructor (
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage) {
      this.images = [];
      this.workouts = [];
      this.state = new StateCache();
      this.defaultWorkouts = deserialize(DefaultWorkouts, json);
      console.log('initilized default workouts', this.defaultWorkouts.workouts.map(w => w.id));
  }

  private state: StateCache;
  setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.state.setLastSelectedWorkoutDay(workoutName, workoutDayIndex);
  }
  getLastSelectedWorkoutDay(workoutName: string): number {
    return this.state.getLastSelectedWorkoutDay(workoutName);
  }

  getWorkout(id: number): Workout {
    console.log(`servicing workout ${id} from `, this.workouts);
    const workout = this.workouts.filter(w => w.id === id);
    console.log(`found workout ${id}`, workout);
    return workout[0];
  }

  async initWorkouts() {
    await this.storage.ready();
    this.workouts = await this.storage.get(WORKOUTS_STORAGE_KEY);
    if (!this.workouts || !this.workouts.length) {
      console.log('setting default workouts');
      await this.storage.set(WORKOUTS_STORAGE_KEY, this.defaultWorkouts.workouts);
      this.workouts = this.defaultWorkouts.workouts;
    }
    console.log('loaded cached workouts', this.workouts.map(w => w.id));
    return this.workouts;
  }

  async resetWorkouts() {
    await this.storage.ready();
    let defaultWorkouts: DefaultWorkouts;
    defaultWorkouts = deserialize(DefaultWorkouts, json);
    await this.storage.set(WORKOUTS_STORAGE_KEY, defaultWorkouts.workouts);
    this.workouts = defaultWorkouts.workouts;
    console.log('workouts have been reset');
  }
  async resetImages() {
    this.images = [];
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    /// TODO need to notify the client the data has been reset so it will reload it!
    console.log('images have been reset');
  }

  async saveWorkouts() {
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, this.workouts);
    console.log('workouts have been saved');
  }

  async loadStoredImages(): Promise<SavedImage[]> {
    await this.storage.ready();
    const images = await this.storage.get(IMAGES_STORAGE_KEY);

    if (images && images.length) {
      this.images = images;
    } else {
      if (this.isWebApp) {
        this.initDefaultImages();
      }
    }
    return this.images;
  }

  async initDefaultImages() {
    console.log('initializing saved images from assests...');
    const images: Map<string, SavedImage> = new Map();
    for (const workout of this.defaultWorkouts.workouts) {
      for (const day of workout.days) {
        for (const set of day.exerciseSets) {
          for (const exe of set.exercises) {
            const url = exe.imageUrl;
            if (!images[url]) {
              images.set(url, { name: url, path: url, filePath: url });
            }
          }
        }
      }
    }
    images.forEach((image: SavedImage) => {
      this.images.push(image);
    });

    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this.images);
    console.log(`initialized ${this.images.length} saved images from assests`);
  }

  async saveImage(name: string) {
    const filePath = this.file.dataDirectory + name;
    const resPath = this.pathForImage(filePath);

    const newEntry: SavedImage = {
        name: name,
        path: resPath,
        filePath: filePath
    };
    console.log('adding image', JSON.stringify(newEntry));
    console.log('this.images:', JSON.stringify(this.images));
    this.images.push(newEntry);
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, this.images);
    console.log(`stored updated images list: ${name}`);
  }

  async deleteImage(imgEntry: SavedImage, position: number) {
    this.images.splice(position, 1);
    await this.storage.set(IMAGES_STORAGE_KEY, this.images);
    if (!this.isWebApp) {
      const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      await this.file.removeFile(correctPath, imgEntry.name);
    }
  }

  get isWebApp(): boolean {
    return !this.platform.is('ios') && !this.platform.is('android');
  }

  pathForImage(img: string) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

}
