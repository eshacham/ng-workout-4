import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

export interface IDataState {
    entities: WorkoutsDataMaps;
}

export const initialDataState: IDataState = {
    entities: {
        workouts: { byId: {} },
        days: { byId: {} },
        sets: { byId: {} },
        exercises: { byId: {} },
    },
};
