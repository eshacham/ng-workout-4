import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutDaysPage } from './workout-days.page';
import { WorkoutDayComponent } from 'src/app/components/workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from 'src/app/components/exercise-thumbnail/exercise-thumbnail.component';
import { ExerciseThumbnailPopoverComponent } from 'src/app/components/exercise-thumbnail-popover/exercise-thumbnail-popover.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutDaysPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WorkoutDaysPage,
    WorkoutDayComponent,
    ExerciseThumbnailComponent,
    ExerciseThumbnailPopoverComponent
  ],
})
export class WorkoutDaysPageModule {}
