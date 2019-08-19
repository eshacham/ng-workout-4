import { DisplayMode  } from './enums';

export class ExerciseSetSwitchModeEvent {

   displayMode: DisplayMode;
   runningExerciseSetIndex: number;
   runningExerciseSetDayId: number;

   constructor(_displayMode: DisplayMode,
            _runningExerciseIndex: number,
            _runningExerciseDayId: number) {
                this.displayMode = _displayMode;
                this.runningExerciseSetIndex = _runningExerciseIndex;
                this.runningExerciseSetDayId = _runningExerciseDayId;
   }
}
