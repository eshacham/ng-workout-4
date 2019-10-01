export interface IState<T> {
    byId: {
        [id: string]: T;
    };
}
