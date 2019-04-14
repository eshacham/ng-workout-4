import { ExerciseSetAction } from './enums';
import { ExerciseSet } from './ExerciseSet';

export class ExerciseSetActionEvent {

    action: ExerciseSetAction;
    exerciseSet: ExerciseSet;
    exerciseSetIndex: number;
    workoutDayName: string;

   constructor (
        _exerciseAction: ExerciseSetAction,
        _exerciseSet: ExerciseSet,
        _exerciseSetIndex: number,
        _workoutDayName: string) {
        this.action = _exerciseAction;
        this.exerciseSet = _exerciseSet;
        this.exerciseSetIndex = _exerciseSetIndex;
        this.workoutDayName = _workoutDayName;
   }
}
