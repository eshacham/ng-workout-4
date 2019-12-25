import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabWorkoutsPage } from './tab-workouts.page';
import { WorkoutCardComponent } from '../components/workout-card/workout-card.component';
import { WorkoutSelectionPopoverComponent } from '../components/workout-selection-popover/workout-selection-popover.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TabWorkoutsPage
  },
  {
    path: 'workout-days/:id',
    loadChildren:  '../pages/workout-days/workout-days.module#WorkoutDaysPageModule'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabWorkoutsPage,
    WorkoutCardComponent,
    WorkoutSelectionPopoverComponent
  ],
  entryComponents: [
    WorkoutSelectionPopoverComponent,
  ],
  providers: [
  ]
})
export class TabWorkoutsPageModule {}
