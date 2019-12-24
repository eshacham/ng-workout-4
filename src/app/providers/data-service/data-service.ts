import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File as MobileFile, FileEntry} from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';
import { ExerciseMediaBean } from '../../models/ExerciseMedia';
import { Muscles } from '../../models/enums';
import { getDefaultWorkoutsMaps } from '../../constants/defaultWorkouts';
import { getDefaultImages } from '../../constants/defaultExerciseMedia';
import { AllDataMaps, WorkoutsDataMaps, MediaDataMaps } from 'src/app/models/interfaces';
import { IAppState } from '../../store/state/app.state';
import { DataReset, GetData} from 'src/app/store/actions/data.actions';
import { Guid } from 'guid-typescript';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';
import Auth from '@aws-amplify/auth';
import S3 from '@aws-amplify/storage';

const WORKOUTS_STORAGE_KEY = 'my_workouts';
const IMAGES_STORAGE_KEY = 'my_images';

@Injectable()
export class DataServiceProvider {

  private _images: ExerciseMediaBean[];
  private _creds: any;

  constructor(
    private platform: Platform,
    private mobileFile: MobileFile,
    private webview: WebView,
    private storage: Storage,
    private store: Store<IAppState>,
    private http: HttpClient,
    ) {
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
    await this.displayAuthCreds();

    imagesData = await this.getImagesData();
    workoutsData = await this.getWorkoutsData();
    if (!imagesData || !workoutsData ) {
      workoutsData = await this.initDefaultWorkouts();
      imagesData = await this.initDefaultImages();
      this.store.dispatch(new DataReset());
    } else {
      if (this.isMobile) {
          this.AssertImagesPath(imagesData);
        }
    }

    data = { ...workoutsData, ...imagesData };
    if (data.workouts && data.media) {
      console.log('data-service - loaded cached workouts', Object.keys(data.workouts.byId));
      console.log('data-service - loaded cached images', Object.keys(data.media.byId));
    }
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
    await this.saveImages(data);
    return data;
  }

  private async getWorkoutsData(): Promise<WorkoutsDataMaps> {
    await this.storage.ready();
    const data: WorkoutsDataMaps = await this.storage.get(WORKOUTS_STORAGE_KEY);
    return data;
  }

  private async initDefaultWorkouts(): Promise<WorkoutsDataMaps> {
    const data = getDefaultWorkoutsMaps();
    console.log(`initialized and saved ${Object.keys(data.workouts.byId).length} default workouts`, data.workouts.byId);
    await this.saveWorkouts(data);
    return data;
  }

  private AssertImagesPath(mediaDataMaps: MediaDataMaps) {
    const imagesToUpdate = Object.values(mediaDataMaps.media.byId)
      .filter(i => !i.isDefault && i.nativePath.indexOf(this.mobileFile.dataDirectory) < 0);
    for (const image of imagesToUpdate) {
      const oldPath = image.nativePath;
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      image.nativePath = this.mobileFile.dataDirectory + name;
      image.ionicPath = this.getIonicPath(image.nativePath);
      console.log(`update images media path from ${oldPath} to ${image.nativePath}`);
    }
    if (imagesToUpdate.length) {
      this.saveImages(mediaDataMaps);
    }
  }

  async saveImages(images: MediaDataMaps) {
    await this.storage.ready();
    await this.storage.set(IMAGES_STORAGE_KEY, images);
    console.log('images have been saved');
  }

  async saveWorkouts(workoutsDataMaps: WorkoutsDataMaps) {
    await this.storage.ready();
    await this.storage.set(WORKOUTS_STORAGE_KEY, workoutsDataMaps);
    console.log('workouts have been saved');
  }

  async resetData() {
    await this.storage.ready();
    await this.storage.remove(IMAGES_STORAGE_KEY);
    await this.storage.remove(WORKOUTS_STORAGE_KEY);
    this.store.dispatch(new GetData());
    console.log('images and workouts have been reset');
  }

  getExerciseMusclesFilterFromImage(name: string): Muscles[] {
    const imageToSet = this._images.filter(image => image.name === name)[0];
    if (imageToSet) {
      return imageToSet.muscles;
    }
  }

  async addImage(origImagePath: string, origImageName: string, newImageName: string):
  Promise<ExerciseMediaBean> {
    await this.mobileFile.copyFile(origImagePath, origImageName, this.mobileFile.dataDirectory, newImageName);
    const nativePath = this.mobileFile.dataDirectory + newImageName;
    console.log(`new image ${origImagePath}/${origImageName} has been copied to ${nativePath}`);

    const newEntry: ExerciseMediaBean = new ExerciseMediaBean({
      id: Guid.raw(),
      name: newImageName,
      ionicPath: this.getIonicPath(nativePath),
      nativePath: nativePath,
      isDefault: false,
      muscles: new Set(),
    });
    return newEntry;
  }

  async deleteImage(image: ExerciseMediaBean): Promise<string> {
    if (this.isMobile && !image.isDefault) {
      const path = image.nativePath.substr(0, image.nativePath.lastIndexOf('/') + 1);
      const name = image.nativePath.substr(image.nativePath.lastIndexOf('/') + 1);
      console.log(`deleting image file ${path}/${name}`);
      await this.mobileFile.removeFile(path, name);
    }
    return image.id;
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
  async displayAuthCreds() {
    this._creds = await Auth.currentCredentials();
    console.log('currentCredentials', this._creds);
  }

  async exportWorkout(workoutId: string): Promise<string> {
    const zip = new JSZip();
    const workoutsData = await this.getWorkoutsData();
    const imagesData = await this.getImagesData();
    workoutsData.workouts.byId = { [workoutId]: workoutsData.workouts.byId[workoutId] };
    const daysById = { };
    Object.keys(workoutsData.days.byId).forEach(dayId => {
      if (workoutsData.days.byId[dayId].workoutId === workoutId) {
        daysById[dayId] = workoutsData.days.byId[dayId];
      }
    });
    workoutsData.days.byId = daysById;
    const setsById = { };
    Object.keys(workoutsData.sets.byId).forEach(setId => {
      if (workoutsData.sets.byId[setId].workoutId === workoutId) {
        setsById[setId] = workoutsData.sets.byId[setId];
      }
    });
    workoutsData.sets.byId = setsById;
    const exercisesById = { };
    const imagesbyId = { };
    Object.keys(workoutsData.exercises.byId).forEach(async exerciseId => {
      const exercise = workoutsData.exercises.byId[exerciseId];
      if (exercise.workoutId === workoutId) {
        exercisesById[exerciseId] = exercise;
        const imgEntry = imagesData.media.byId[exercise.mediaId];
        if (!imagesbyId[exercise.mediaId]) {
          imagesbyId[exercise.mediaId] = imgEntry;
          try {
            if (!imgEntry.isDefault) {
              const mobileFileEntry = <FileEntry>(await this.mobileFile.resolveLocalFilesystemUrl(imgEntry.nativePath));
              mobileFileEntry.file(data => {
                this.addImageToZip(imgEntry.name, data, zip);
              });
            } else {
              this.http.get(imgEntry.nativePath, { responseType: 'blob' })
              .subscribe((data) => {
                this.addImageToZip(imgEntry.name, data, zip);
              });
            }
          } catch (err) {
            console.log('reading/zipping file error', err);
          }
        }
      }
    });
    workoutsData.exercises.byId = exercisesById;
    imagesData.media.byId = imagesbyId;
    zip.file(WORKOUTS_STORAGE_KEY, JSON.stringify(workoutsData));
    zip.file(IMAGES_STORAGE_KEY, JSON.stringify(imagesData));
    console.log('zip', zip);
    const blob = await zip.generateAsync({ type: 'blob' });
    console.log('blob', blob);
    let test = await zip.loadAsync(blob);
    console.log('test', test);
    const putResult = await S3.put(Guid.raw(), blob, { contentType: 'application/zip' } );
    const getResult = await S3.get(putResult.key, { download: true });
    console.log('put file ok', getResult);
    test = await zip.loadAsync(getResult.Body);
    console.log('test', test);
    return workoutId;
  }

  private addImageToZip(imageName: string, imageData, zip: JSZip) {
    const reader = new FileReader();
    reader.onloadend = () => {
      zip.file(`images/${imageName}`, reader.result);
    };
    reader.readAsArrayBuffer(imageData);
  }
}
