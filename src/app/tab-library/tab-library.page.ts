import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController,
         Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { LoadingOptions } from '@ionic/core';
import { DataServiceProvider, SavedImage } from '../providers/data-service/data-service';

@Component({
  selector: 'app-tab-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss']
})
export class TabLibraryPage implements OnInit {
  images: SavedImage[];

  constructor(
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private platform: Platform,
    private loadingController: LoadingController,
    private filePath: FilePath,
    private dataServiceProvider: DataServiceProvider) {
      this.images = [];
    }

    get IsMobile()  {
      return this.platform.is('ios') || this.platform.is('android');
    }

    async ngOnInit() {
      const platformSource = await this.platform.ready();
      console.log(`this app runs on ${platformSource}`);
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

    async takePicture(sourceType: PictureSourceType) {
      const options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
      const imagePath = await this.camera.getPicture(options);
      console.log('took picture as: ', imagePath);
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
      await this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }

    createFileName = () => `${new Date().getTime()}.jpg`;

    async copyFileToLocalDir(namePath: string, currentName: string, newFileName: string) {
      try {
        await this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName);
        console.log('new file has been copied');
        await this.dataServiceProvider.saveImage(newFileName);
      } catch (error) {
        console.log('Error while storing file:', error);
        this.presentToast('Error while storing file ');
      }
    }

    async deleteImage(imgEntry: SavedImage, position: number) {
      await this.dataServiceProvider.deleteImage(imgEntry, position);
      this.images = await this.dataServiceProvider.loadStoredImages();
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
