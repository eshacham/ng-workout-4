export interface IDataState {
    hasWorkoutsBeenReset: boolean;
    hasImagesBeenReset: boolean;
    hasDataBeenLoaded: boolean;
}
export const initialDataState: IDataState = {
    hasWorkoutsBeenReset: false,
    hasImagesBeenReset: false,
    hasDataBeenLoaded: false,
};
