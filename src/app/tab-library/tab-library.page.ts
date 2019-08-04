import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { LoadingOptions } from '@ionic/core';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ExerciseMedia } from '../models/ExerciseMedia';
import { ToastService } from '../providers/toast-service/toast.service';
import { ExerciseSetActionEvent } from '../models/ExerciseActionEvent';
import { ExerciseSetAction, Muscles } from '../models/enums';
import { MuscleFilterFor } from '../pages/select-muscle/select-muscle.page';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit, OnDestroy {

  _images: ExerciseMedia[];
  isMobile = false;
  subs: Subscription;
  _useFilter = false;

  constructor(
    private camera: Camera,
    private file: File,
    private actionSheetController: ActionSheetController,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private filePath: FilePath,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
    this._images = [];
  }

  get images(): ExerciseMedia[] {
    if (this.useFilter) {
      return this.filterImagesByMuscles(this.dataService.libraryMuscleFilter);
    } else {
      return this._images;
    }
  }
  set images(images: ExerciseMedia[]) {
    this._images = images;
  }

  get useFilter(): boolean {
    return this._useFilter;
  }
  set useFilter(use: boolean) {
    if (this._useFilter !== use) {
      this._useFilter = use;
    }
  }

  async ngOnInit() {
    this._images = await this.dataService.getImages();
    this.isMobile = this.dataService.isMobile;
    this.subs = this.dataService.workoutPublisher.subscribe(event => this.handleWorkoutActionEvent(event));
    for (const img of this._images) {
      console.log('tab-library-page: loaded images from storage:', img.name, img.muscles);
    }
  }

  ionViewWillEnter() {
    console.log('tab-library-ionViewWillEnter', this.dataService.exerciseMuscleFilter);

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  async handleWorkoutActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.ImagesReset:
        this.images = await this.dataService.getImages();
        break;
    }
  }

  async presentToast(text: string) {
    this.toastService.presentToast(text);
  }

  async selectImage() {
    const options = {
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }]
    };

    const actionSheet = await this.actionSheetController.create(options);
    console.log('presenting action sheet...');
    await actionSheet.present();
  }

  get IsMobile() {
    return this.isMobile;
  }

  async takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    const imagePath = await this.camera.getPicture(options);
    console.log('took picture as: ', imagePath);
    let imageName: string;
    let ImagePath: string;

    if (this.dataService.isAndriod && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      imageName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
      const tempPath = await this.filePath.resolveNativePath(imagePath);
      ImagePath = tempPath.substr(0, tempPath.lastIndexOf('/') + 1);
    } else {
      imageName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      ImagePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    }
    await this.copyFileToLocalDir(ImagePath, imageName, `${new Date().getTime()}.jpg`);
  }

  async copyFileToLocalDir(imagePath: string, imageName: string, newImageName: string) {
    try {
      await this.dataService.addImage(imagePath, imageName, newImageName);
    } catch (error) {
      console.log('Error storing new image:', error);
      this.presentToast('Error storing new image');
    }
  }

  async deleteImage(imgEntry: ExerciseMedia, position: number) {
    await this.dataService.deleteImage(imgEntry, position);
    this.images = await this.dataService.getImages();
    this.presentToast('File removed.');
  }

  async updateImage(imgEntry: ExerciseMedia, position: number) {
    await this.dataService.updateImage(imgEntry, position);
    this.images = await this.dataService.getImages();
    this.presentToast('File updated.');
  }

  async setMuscle(imgEntry: ExerciseMedia) {
    const extra: NavigationExtras = {
      relativeTo: this.route,
      state: {
        muscleFilterUsage: {
          for: MuscleFilterFor.SetExerciseMedia,
          mediaName: imgEntry.name
        }
      }
    };
    this.router.navigate(['select-muscle'], extra);
  }

  async selectMuscle() {
    const extra: NavigationExtras = {
      relativeTo: this.route,
      state: {
        muscleFilterUsage: {
          for: MuscleFilterFor.FilterLibraryImages
        }
      }
    };
    this.router.navigate(['select-muscle'], extra);
  }

  filterImagesByMuscles(muscles: Set<Muscles>): ExerciseMedia[] {
    console.log('tab-library: filtering by muscles', Array.from(muscles));
    if (muscles.size === 0) {
      return [];
    }
    const images = this._images.filter((image) => {
      const intersection =
        new Set(Array.from(image.muscles).filter(x => muscles.has(x)));
      return (intersection.size > 0);
    });
    return images;
  }

  async startUpload(imgEntry: ExerciseMedia) {
    try {
      const entry = await this.file.resolveLocalFilesystemUrl(imgEntry.nativePath);
      (<FileEntry>entry).file(file => this.readFile(file));
    } catch (err) {
      this.presentToast('Error while reading file.');
    }
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {
    const options: LoadingOptions = {
      message: 'Uploading image...'
    };
    const loading = await this.loadingController.create(options);
    await loading.present();

    // this.http.post("http://localhost:8888/upload.php", formData)
    //     .pipe(
    //         finalize(() => {
    loading.dismiss();
    //         })
    //     )
    //     .subscribe(res => {
    //         if (res['success']) {
    this.presentToast('File upload complete.');
    //         } else {
    //             this.presentToast('File upload failed.')
    //         }
    //     });
  }

}
