export interface IDataState {
    hasDataBeenReset: boolean;
    hasDataBeenLoaded: boolean;
}
export const initialDataState: IDataState = {
    hasDataBeenReset: false,
    hasDataBeenLoaded: false,
};
