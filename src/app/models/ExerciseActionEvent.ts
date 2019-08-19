import { ExerciseSetAction } from './enums';
import { ExerciseSet } from './ExerciseSet';

export class ExerciseSetActionEvent {

    action: ExerciseSetAction;
    exerciseSet: ExerciseSet;
    exerciseSetIndex: number;
    workoutDayId: number;

   constructor (
        _exerciseAction: ExerciseSetAction,
        _exerciseSet: ExerciseSet,
        _exerciseSetIndex: number,
        _workoutDayId: number) {
        this.action = _exerciseAction;
        this.exerciseSet = _exerciseSet;
        this.exerciseSetIndex = _exerciseSetIndex;
        this.workoutDayId = _workoutDayId;
   }
}
