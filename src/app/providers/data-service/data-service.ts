import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { ExerciseMedia } from '../../models/ExerciseMedia';
import { Muscles } from '../../models/enums';
import { getDefaultWorkouts } from '../../constants/defaultWorkouts';
import { getDefaultImages } from '../../constants/defaultExerciseMedia';
import { AllDataMaps, WorkoutsDataMaps, MediaDataMaps } from 'src/app/models/DefaultWorkouts';
import { IAppState } from '../../store/state/app.state';
import {
  ResetWorkouts,
  ResetImages,
  UpdateWorkouts,
  UpdateImages,
  GetData,
} from 'src/app/store/actions/data.actions';
import { Guid } from 'guid-typescript';

const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

@Injectable()
export class DataServiceProvider {

  private _images: ExerciseMedia[];

  constructor(
    private platform: Platform,
    private file: File,
    private webview: WebView,
    private storage: Storage,
    private store: Store<IAppState>) {
    console.log('data-service - constructor');
  }

  async getAllData(): Promise<AllDataMaps> {
    let data: AllDataMaps = {
      workouts: { byId: {} },
      days: { byId: {} },
      sets: { byId: {} },
      exercises: { byId: {} },
      media: { byId: {} }
    };

    let imagesData: MediaDataMaps;
    let workoutsData: WorkoutsDataMaps;

    await this.displayPlatform();

    imagesData = await this.getImagesData();
    if (!imagesData) {
      imagesData = await this.initDefaultImages();
      workoutsData = await this.initDefaultWorkouts();
    } else {
      workoutsData = await this.getWorkoutsData();
      if (!workoutsData) {
        workoutsData = await this.initDefaultWorkouts();
      } else {
        if (this.isMobile) {
          this.UpdateImagesInWorkouts(imagesData);
        }
      }
    }
    data = { ...workoutsData, ...imagesData };
    console.log('data-service - loaded cached workouts', Object.keys(data.workouts.byId));
    console.log('data-service - loaded cached images', Object.keys(data.media.byId));
    return data;
  }

  private async getImagesData(): Promise<MediaDataMaps> {
    await this.storage.ready();
    const data: MediaDataMaps = await this.storage.get(IMAGES_STORAGE_KEY);
    return data;
  }

  private async initDefaultImages(): Promise<MediaDataMaps> {
    const data: MediaDataMaps = getDefaultImages();
    console.log(`initialized and saved ${Object.keys(data.media.byId).length} default images`, data.media.byId);
    await this.saveImages(data, true);
    return data;
  }

  private async getWorkoutsData(): Promise<WorkoutsDataMaps> {
    await this.storage.ready();
    const data: WorkoutsDataMaps = await this.storage.get(WORKOUTS_STORAGE_KEY);
    return data;
  }

  private async initDefaultWorkouts(): Promise<WorkoutsDataMaps> {
    const data = getDefaultWorkouts();
    console.log(`initialized and saved ${Object.keys(data.workouts.byId).length} default workouts`, data.workouts.byId);
    await this.saveWorkouts(data, true);
    return data;
  }

  private UpdateImagesInWorkouts(mediaDataMaps: MediaDataMaps) {
    const imagesToUpdate = Object.values(mediaDataMaps.media.byId)
      .filter(i => !i.isDefault && i.nativePath.indexOf(this.file.dataDirectory) < 0);
    for (const image of imagesToUpdate) {
      const oldPath = image.nativePath;
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      image.nativePath = this.file.dataDirectory + name;
      image.ionicPath = this.getIonicPath(image.nativePath);
      console.log(`update images media path from ${oldPath} to ${image.nativePath}`);
    }
    if (imagesToUpdate.length) {
      this.saveImages(mediaDataMaps);
    }
  }

  async saveImages(images: MediaDataMaps, imagesHaveBeenReset: boolean = false) {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, images);
    console.log('images have been saved');
    if (imagesHaveBeenReset) {
      this.store.dispatch(new ResetImages());
    }
  }

  async saveWorkouts(workoutsDataMaps: WorkoutsDataMaps, haveWorkoutsBeenReset: boolean = false) {
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, workoutsDataMaps);
    console.log('workouts have been saved');
    if (haveWorkoutsBeenReset) {
      this.store.dispatch(new ResetWorkouts());
    }
  }

  async resetImages() {
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    this.store.dispatch(new GetData());
    console.log('images have been reset');
  }

  async resetWorkouts() {
    await this.storage.ready();
    await this.storage.remove(WORKOUTS_STORAGE_KEY);
    this.store.dispatch(new GetData());
    console.log('workouts have been reset to default workouts');
  }

  getExerciseMusclesFilterFromImage(name: string): Muscles[] {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      return imageToSet.muscles;
    }
  }

  async addImage(origImagePath: string, origImageName: string, newImageName: string):
  Promise<ExerciseMedia> {
    await this.file.copyFile(origImagePath, origImageName, this.file.dataDirectory, newImageName);
    const nativePath = this.file.dataDirectory + newImageName;
    console.log(`new image ${origImagePath}/${origImageName} has been copied to ${nativePath}`);

    const newEntry: ExerciseMedia = new ExerciseMedia({
      id: Guid.raw(),
      name: newImageName,
      ionicPath: this.getIonicPath(nativePath),
      nativePath: nativePath,
      isDefault: false,
      muscles: new Set(),
    });
    return newEntry;
  }

  async deleteImage(image: ExerciseMedia) {
    if (this.isMobile && !image.isDefault) {
      const path = image.nativePath.substr(0, image.nativePath.lastIndexOf('/') + 1);
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      console.log(`deleting image file ${path}/${name}`);
      await this.file.removeFile(path, name);
    }
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
