export interface IDataState {
    hasDataBeenReset: boolean;
    hasDataBeenLoaded: boolean;
    error: string;
}
export const initialDataState: IDataState = {
    hasDataBeenReset: false,
    hasDataBeenLoaded: false,
    error: null
};
