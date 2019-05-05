import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabLibraryPage } from './tab-library.page';
import { Camera } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabLibraryPage }]),
    HttpClientModule,
  ],
  declarations: [TabLibraryPage],
  providers: [
    Camera,
    FilePath
  ]
})
export class TabLibraryPageModule {}
