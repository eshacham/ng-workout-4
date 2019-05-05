import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
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
  private images: SavedImage[] = [];

  constructor () {
    this.state = new StateCache();
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

   async initWorkouts(storage: Storage) {
    await storage.ready();
    this.workouts = await storage.get(WORKOUTS_STORAGE_KEY);
    if (!this.workouts || !this.workouts.length) {
      console.log('initializing workouts');
      let defaultWorkouts: DefaultWorkouts;
      defaultWorkouts = deserialize(DefaultWorkouts, json);
      await storage.set(WORKOUTS_STORAGE_KEY, defaultWorkouts.workouts);
      this.workouts = defaultWorkouts.workouts;
    }
    console.log('cached workouts', this.workouts.map(w => w.id));
    return this.workouts;
   }

   async resetWorkouts(storage: Storage) {
    await storage.ready();
    let defaultWorkouts: DefaultWorkouts;
    defaultWorkouts = deserialize(DefaultWorkouts, json);
    await storage.set(WORKOUTS_STORAGE_KEY, defaultWorkouts.workouts);
    this.workouts = defaultWorkouts.workouts;
    console.log('workouts have been reset');
  }

  async saveWorkouts(storage: Storage) {
    await storage.ready();
    await storage.set(WORKOUTS_STORAGE_KEY, this.workouts);
    console.log('workouts have been saved');
  }

  // async loadStoredImages(storage: Storage, file: File, webview: WebView) {
  //   const images = await storage.get(IMAGES_STORAGE_KEY);
  //   if (images) {
  //     const arr = JSON.parse(images);
  //     this.images = arr.map((img: string): SavedImage => {
  //       const filePath = file.dataDirectory + img;
  //       const resPath = this.pathForImage(webview, filePath);
  //       return { name: img, path: resPath, filePath: filePath };
  //     });
  //   }
  // }

  // isWebApp() {
  //   return !this.platform.is('ios') && !this.platform.is('android');
  // }

  // getSavedImages(storage: Storage, file: File, webview: WebView): SavedImage[] {
  //   if (!this.images.length) {
  //     // TODO init the default image list from assests - for web demo only

  //   }

  // }

  pathForImage(webview: WebView, img: string) {
    if (img === null) {
      return '';
    } else {
      const converted = webview.convertFileSrc(img);
      return converted;
    }
  }

}
