import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabWorkoutsPage } from './tab-workouts.page';
import { IonicStorageModule } from '@ionic/storage';
import { WorkoutCardComponent } from '../components/workout-card/workout-card.component';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';

const routes: Routes = [
  {
    path: '',
    component: TabWorkoutsPage
  },
  {
    path: 'workout-days',
    loadChildren:  '../pages/workout-days/workout-days.module#WorkoutDaysPageModule'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabWorkoutsPage,
    WorkoutCardComponent
  ],
  providers: [DataServiceProvider]
})
export class TabWorkoutsPageModule {}
