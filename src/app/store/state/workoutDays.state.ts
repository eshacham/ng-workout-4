import { Direction } from '../actions/workoutDays.actions';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';
import { IState } from './generics';

export interface IWorkoutDaysState extends IState<WorkoutDayBean> {
    // workoutDayId2AddFrom?: string;
    deleteSelectedWorkoutDay?: string;
    workoutDayMoveState?: Direction;
}

export const initialWorkoutDaysState: IWorkoutDaysState = {
    // workoutDayId2AddFrom: undefined,
    deleteSelectedWorkoutDay: undefined,
    workoutDayMoveState: undefined,
    byId: {},
};
