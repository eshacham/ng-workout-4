import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GripType, WeightType, GripWidth, RepetitionSpeed } from 'src/app/models/enums';
import { ExerciseBean } from 'src/app/models/Exercise';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { UpdateExercise } from 'src/app/store/actions/exercises.actions';

@Component({
  selector: 'app-exercise-variation-popover',
  templateUrl: './exercise-variation-popover.component.html',
  styleUrls: ['./exercise-variation-popover.component.scss'],
})
export class ExerciseVariationPopoverComponent implements OnInit {

  exercise: ExerciseBean;
  weightTypes: string[];
  gripTypes: string[];
  gripWidths: string[];
  repSpeeds: string[];

  constructor(private navParams: NavParams,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.exercise = this.navParams.data.exercise;
    this.gripTypes = Object.keys(GripType).map(key => GripType[key]);
    this.weightTypes = Object.keys(WeightType).map(key => WeightType[key]);
    this.gripWidths = Object.keys(GripWidth).map(key => GripWidth[key]);
    this.repSpeeds = Object.keys(RepetitionSpeed).map(key => RepetitionSpeed[key]);
  }
  exerciseChanged(event, prop: string) {
    const newExe = ExerciseBean.copyExercise(this.exercise);
    newExe[prop] = event.target.value;
    this.store.dispatch(new UpdateExercise({
      exeId: this.exercise.id,
      exercise: newExe
    }));
  }
  exerciseGripChanged(event, prop: string) {
    const newExe = ExerciseBean.copyExercise(this.exercise);
    const newGrip = {...newExe.theGrip };
    newGrip[prop] = event.target.value;
    newExe.theGrip = newGrip;
    this.store.dispatch(new UpdateExercise({
      exeId: this.exercise.id,
      exercise: newExe
    }));
  }


}
