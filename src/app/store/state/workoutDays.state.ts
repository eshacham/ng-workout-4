import { Direction } from '../actions/workoutDays.actions';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';
import { IState } from './generics';

export interface IWorkoutDaysState extends IState<WorkoutDayBean> {
    deleteSelectedWorkoutDay?: string;
    workoutDayMoveState?: Direction;
}

export const initialWorkoutDaysState: IWorkoutDaysState = {
    deleteSelectedWorkoutDay: undefined,
    workoutDayMoveState: undefined,
    byId: {},
};
