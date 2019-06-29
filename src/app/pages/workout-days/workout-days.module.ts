import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutDaysPage } from './workout-days.page';
import { WorkoutDayComponent } from 'src/app/components/workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from 'src/app/components/exercise-thumbnail/exercise-thumbnail.component';
import { ExerciseThumbnailPopoverComponent } from 'src/app/components/exercise-thumbnail-popover/exercise-thumbnail-popover.component';
import { ExerciseVariationComponent } from 'src/app/components/exercise-variation/exercise-variation.component';
import { ExerciseVariationPopoverComponent } from 'src/app/components/exercise-variation-popover/exercise-variation-popover.component';
import { SelectExercisePageModule } from 'src/app/pages/select-exercise/select-exercise.module';
import { SelectMusclePageModule } from 'src/app/pages/select-muscle/select-muscle.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WorkoutDaysPage,
  },
  {
    path: 'select-exercise',
    loadChildren: '../select-exercise/select-exercise.module#SelectExercisePageModule'
  },
  {
    path: 'select-muscle',
    loadChildren: '../select-muscle/select-muscle.module#SelectMusclePageModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SelectExercisePageModule,
    SelectMusclePageModule,
  ],
  declarations: [
    WorkoutDaysPage,
    WorkoutDayComponent,
    ExerciseThumbnailComponent,
    ExerciseThumbnailPopoverComponent,
    ExerciseVariationComponent,
    ExerciseVariationPopoverComponent
  ],
  entryComponents: [
    ExerciseThumbnailPopoverComponent,
    ExerciseVariationPopoverComponent
  ]
})
export class WorkoutDaysPageModule { }
