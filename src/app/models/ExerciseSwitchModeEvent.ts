import { DisplayMode  } from './enums';

export class ExerciseSetSwitchModeEvent {

   displayMode: DisplayMode;
   runningExerciseSetIndex: number;
   runningExerciseSetDayName: string;

   constructor(_displayMode: DisplayMode,
            _runningExerciseIndex: number,
            _runningExerciseDayName: string) {
                this.displayMode = _displayMode;
                this.runningExerciseSetIndex = _runningExerciseIndex;
                this.runningExerciseSetDayName = _runningExerciseDayName;
   }
}
