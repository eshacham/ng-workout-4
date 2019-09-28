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
import { UpdateExerciseMedia, AddExerciseMedia, DeleteExerciseMedia } from '../store/actions/exercisesMedia.actions';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit, OnDestroy {

  private musclesFilter: Muscles[];
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
    return this._images;
  }
  set images(images: ExerciseMedia[]) {
    this._images = images;
  }

  _useFilter = false;
  get useFilter(): boolean {
    return this._useFilter;
  }
  set useFilter(use: boolean) {
    if (this._useFilter !== use) {
      this._useFilter = use;
    }
  }

  get filteredMusclesCount() {
    return this.musclesFilter.length;
  }

  isMobile = false;
  get IsMobile() {
    return this.isMobile;
  }

  async ngOnInit() {
    this.isMobile = this.dataService.isMobile;

    this.store.select(selectExercisesMedia)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(media => {
        this.images = media;
      });

    this.store.select(selectLibraryMusclesFilterState)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (filter) => {
        console.log('tab-library-page redux - LibraryMusclesFilterState:', filter);
        this.musclesFilter = filter;
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - tab-library-page');
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
      const newImage = await this.dataService.addImage(imagePath, imageName, newImageName);
      this.store.dispatch(new AddExerciseMedia({ exerciseMedia: newImage }));
      this.store.dispatch(new UpdateImages());
    } catch (error) {
      console.log('Error storing new image:', error);
      this.presentToast('Error storing new image');
    }
  }

  async deleteImage(imgEntry: ExerciseMedia) {
    await this.dataService.deleteImage(imgEntry);
    this.store.dispatch(new DeleteExerciseMedia({ id: imgEntry.id }));
    this.store.dispatch(new UpdateImages());
    this.presentToast('File removed.');
  }

  updateImage(event, image: ExerciseMedia) {
    console.log(`tab-library-page redux - update image id ${image.id} name with ${event.target.value}`);
    this.store.dispatch(new UpdateExerciseMedia({ id: image.id, name: event.target.value }));
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

  getFilteredImages(): ExerciseMedia[] {
    if (!this.useFilter) {
      return this.images;
    }
    if (this.filteredMusclesCount === 0) {
      return [];
    }
    const images = this._images.filter((image) => {
      const intersection =
        image.muscles.filter(imageMuscle => this.musclesFilter.includes(imageMuscle));
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
