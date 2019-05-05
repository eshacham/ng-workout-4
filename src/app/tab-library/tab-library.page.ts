import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController,
         Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
// import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { finalize } from 'rxjs/operators';
import { LoadingOptions } from '@ionic/core';
import { DataServiceProvider, SavedImage } from '../providers/data-service/data-service';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit {
  constructor(
    private camera: Camera,
    private file: File,
    // private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private platform: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private sanitizer: DomSanitizer,
    private dataServiceProvider: DataServiceProvider) {
    }

    images: SavedImage[] = [];
    platformSource: string;
    isWeb: boolean;

    async ngOnInit() {
      this.platformSource = await this.platform.ready();
      this.isWeb = !this.platform.is('ios') && !this.platform.is('android');
      console.log(`this app runs on ${this.platformSource}. is it a web site? ${this.isWeb}`);
      this.loadStoredImages();
    }

    async loadStoredImages() {
      this.images = await this.dataServiceProvider.loadStoredImages();
    }

    pathForImage(img: string) {
      if (img === null) {
        return '';
      } else {
        const converted = this.webview.convertFileSrc(img);
        return converted;
      }
    }

    async presentToast(text: string) {
      const toast = await this.toastController.create({
          message: text,
          position: 'bottom',
          duration: 3000
      });
      toast.present();
    }

    async selectImage() {
      console.log(this.platform);
      const options = {
        header: 'Select Image source',
        buttons: [{
            text: 'Load from Library',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          }]
      };
      if (!this.isWeb) {
        options.buttons.push({
            text: 'Use Camera',
            handler: () => {
                this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          });
      }
      const actionSheet = await this.actionSheetController.create(options);
      await actionSheet.present();
    }

    async takePicture(sourceType: PictureSourceType) {
      const options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
      const imagePath = await this.camera.getPicture(options);
      let currentName: string;
      let correctPath: string;

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        const path = await this.filePath.resolveNativePath(imagePath);
        correctPath = path.substr(0, path.lastIndexOf('/') + 1);
      } else {
        currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      }
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }

    createFileName = () => `${new Date().getTime()}.jpg`;

    async copyFileToLocalDir(namePath: string, currentName: string, newFileName: string) {
      try {
        await this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName);
        this.updateStoredImages(newFileName);
      } catch (error) {
        console.log(error);
        this.presentToast('Error while storing file.');
      }
    }

    async updateStoredImages(name: string) {
      const images = await this.storage.get(STORAGE_KEY);
      const arr = JSON.parse(images);
      if (!arr) {
          const newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      const filePath = this.file.dataDirectory + name;
      const resPath = this.pathForImage(filePath);

      const newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    }

    sanitize(imageUrl: string): SafeUrl {
      // return imageUrl
      const safeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      return safeUrl;
    }

    async deleteImage(imgEntry: SavedImage, position: number) {
      this.images.splice(position, 1);
      const images = await this.storage.get(STORAGE_KEY);
      const arr = JSON.parse(images);
      const filtered = arr.filter((name: string) => name !== imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
      const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      await this.file.removeFile(correctPath, imgEntry.name);
      this.presentToast('File removed.');
    }

    async startUpload(imgEntry: SavedImage) {
      try {
        const entry = await this.file.resolveLocalFilesystemUrl(imgEntry.filePath);
        ( < FileEntry > entry).file(file => this.readFile(file));
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
