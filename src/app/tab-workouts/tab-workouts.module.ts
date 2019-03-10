import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabWorkoutsPage } from './tab-workouts.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild([{ path: '', component: TabWorkoutsPage }])
  ],
  declarations: [TabWorkoutsPage]
})
export class TabWorkoutsPageModule {}
