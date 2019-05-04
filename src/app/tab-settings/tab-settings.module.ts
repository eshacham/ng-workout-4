import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { TabSettingsPage } from './tab-settings.page';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabSettingsPage }]),
    IonicStorageModule.forRoot()
  ],
  declarations: [TabSettingsPage],
  providers: [DataServiceProvider]
})
export class TabSettingsPageModule {}
