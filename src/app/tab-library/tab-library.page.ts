import { Store } from '@ngrx/store';
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
import { Muscles } from '../models/enums';
import { MuscleFilterFor } from '../pages/select-muscle/select-muscle.page';
import { IAppState } from '../store/state/app.state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { selectLibraryMusclesFilterState } from '../store/selectors/musclesFilter.selectors';
import { selectExercisesMedia } from '../store/selectors/ExercisesMedia.selectors';
import { UpdateImages } from '../store/actions/data.actions';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit, OnDestroy {

  isMobile = false;
  _useFilter = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private camera: Camera,
    private file: File,
    private actionSheetController: ActionSheetController,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private filePath: FilePath,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this._images = [];
  }

  _images: ExerciseMedia[];
  get images(): ExerciseMedia[] {
    if (this.useFilter) {
      return this.filteredImages;
    } else {
      return this._images;
    }
  }
  set images(images: ExerciseMedia[]) {
    this._images = images;
  }

  _filteredImages: ExerciseMedia[];
  get filteredImages(): ExerciseMedia[] {
    return this._filteredImages;
  }
  set filteredImages(images: ExerciseMedia[]) {
    this._filteredImages = images;
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
    this.isMobile = this.dataService.isMobile;

    this.store.select(selectExercisesMedia)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(media => {
        this._images = media;
      });

    // this.store.select(selectHasImagesBeenReset)
    // .pipe(takeUntil(this.ngUnsubscribe))
    // .subscribe(async (reset) => {
    //   console.log('tab-library redux - HasDefaultImagesBeenReset:', reset);
    //   if (reset) {
    //     this.images = await this.dataService.getImages();
    //     this.store.dispatch(new LoadedImages());
    //   }
    // });
    this.store.select(selectLibraryMusclesFilterState)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(async (filter) => {
      console.log('tab-library-page redux - LibraryMusclesFilterState:', filter);
      this.filteredImages = this.filterImagesByMuscles(filter);
    });
  }

  ngOnDestroy() {
    console.log('onDestroy - exercise-thumbnail');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  private async presentToast(text: string) {
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

  private async takePicture(sourceType: PictureSourceType) {
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

  private async copyFileToLocalDir(imagePath: string, imageName: string, newImageName: string) {
    try {
      // await this.dataService.addImage(imagePath, imageName, newImageName);
      /// todo : send a command to update the image
      this.store.dispatch(new UpdateImages());
    } catch (error) {
      console.log('Error storing new image:', error);
      this.presentToast('Error storing new image');
    }
  }

  async deleteImage(imgEntry: ExerciseMedia, position: number) {
    // await this.dataService.deleteImage(imgEntry, position);
    /// todo : send a command to update the image
    this.store.dispatch(new UpdateImages());
    this.presentToast('File removed.');
  }

  async updateImage(imgEntry: ExerciseMedia, position: number) {
    // await this.dataService.updateImage(imgEntry, position);
    /// todo : send a command to update the image
    this.store.dispatch(new UpdateImages());
    this.presentToast('File updated.');
  }

  async setMuscle(imgEntry: ExerciseMedia) {
    const extra: NavigationExtras = {
      relativeTo: this.route,
      state: {
        muscleFilterUsage: {
          for: MuscleFilterFor.SetExerciseMedia,
          mediaId: imgEntry.id
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

  filterImagesByMuscles(musclesFilter: Muscles[]): ExerciseMedia[] {
    if (musclesFilter.length === 0) {
      return [];
    }
    console.log('tab-library-page: filtering by muscles', Array.from(musclesFilter));
    const images = this._images.filter((image) => {
      const intersection =
        image.muscles.filter(imageMuscle => musclesFilter.includes(imageMuscle));
      return (intersection.length > 0);
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
