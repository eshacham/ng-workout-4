import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File as MobileFile, FileEntry } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ExerciseMediaBean } from '../models/ExerciseMedia';
import { ToastService } from '../providers/toast-service/toast.service';
import { Muscles } from '../models/enums';
import { MuscleFilterFor } from '../pages/select-muscle/select-muscle.page';
import { IAppState } from '../store/state/app.state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { getLibraryMusclesFilter } from '../store/selectors/musclesFilter.selectors';
import { getExercisesMedias } from '../store/selectors/ExercisesMedia.selectors';
import { UpdateExerciseMedia, AddExerciseMedia, DeleteExerciseMedia } from '../store/actions/exercisesMedia.actions';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit, OnDestroy {

  private musclesFilter: Muscles[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private http: HttpClient,
    private camera: Camera,
    private mobileFile: MobileFile,
    private actionSheetController: ActionSheetController,
    private toastService: ToastService,
    private filePath: FilePath,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this._images = [];
  }

  _images: ExerciseMediaBean[];
  get images(): ExerciseMediaBean[] {
    return this._images;
  }
  set images(images: ExerciseMediaBean[]) {
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

  ngOnInit() {
    this.isMobile = this.dataService.isMobile;

    this.store.select(getExercisesMedias)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(media => {
        this.images = media;
      });

    this.store.select(getLibraryMusclesFilter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((filter) => {
        console.log('tab-library-page redux - getLibraryMusclesFilter:', filter);
        this.musclesFilter = filter;
      });

    }

    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }

  private presentToast(text: string) {
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
    const newImageName = `${new Date().getTime()}.jpg`;
    this.addNewImage(ImagePath, imageName, newImageName);
  }

  private addNewImage(imagePath: string, imageName: string, newImageName: string) {
      this.store.dispatch(new AddExerciseMedia({
        origPath: imagePath,
        origName: imageName,
        newName: newImageName
      }));
  }

  async deleteImage(imgEntry: ExerciseMediaBean) {
    this.store.dispatch(new DeleteExerciseMedia({ image: imgEntry }));
    this.presentToast('File removed.');
  }

  updateImage(value: string, image: ExerciseMediaBean) {
    console.log(`tab-library-page - updating image (id ${image.id}) name to ${value}`);
    this.store.dispatch(new UpdateExerciseMedia({ id: image.id, name: value }));
    this.presentToast('File updated.');
  }

  async setMuscle(imgEntry: ExerciseMediaBean) {
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

  getFilteredImages(): ExerciseMediaBean[] {
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
  async startUpload(imgEntry: ExerciseMediaBean) {
    try {
      if (!imgEntry.isDefault) {
        const mobileFileEntry = <FileEntry>(await this.mobileFile.resolveLocalFilesystemUrl(imgEntry.nativePath));
        mobileFileEntry.file(data => {
          this.zipFile(imgEntry.name, data);
        });
      } else {
        this.http.get(imgEntry.nativePath, { responseType: 'blob' })
        .subscribe((data) => {
          this.zipFile(imgEntry.name, data);
        });
      }
    } catch (err) {
      console.log('reading/zipping file error', err);
      this.presentToast('Error while reading file.');
    }
  }

  private zipFile(name: string, data) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log('file name, data', [name, reader.result]);
      const zip = new JSZip();
      zip.file(`images/${name}`, reader.result);
      console.log('zip', zip);
    };
    reader.readAsArrayBuffer(data);
  }

}
