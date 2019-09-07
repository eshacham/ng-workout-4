import { Direction } from '../actions/workoutDays.actions';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export interface IWorkoutDaysState {
    workoutDayId2AddFrom?: string;
    deleteSelectedWorkoutDay?: string;
    workoutDayMoveState?: Direction;
    byId: { [id: string]: WorkoutDayBean };
}

export const initialWorkoutDaysState: IWorkoutDaysState = {
    workoutDayId2AddFrom: undefined,
    deleteSelectedWorkoutDay: undefined,
    workoutDayMoveState: undefined,
    byId: {},
};
