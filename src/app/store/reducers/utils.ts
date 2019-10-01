import { IState } from '../state/generics';
import { Bean } from 'src/app/models/interfaces';
export function removeItemFromMap<T>(itemId: string, state: IState<T>): {
    [id: string]: T;
} {
    let mapWithoutItem: {
        [id: string]: T;
    };
    let item: T;
    ({ [itemId]: item, ...mapWithoutItem } = state.byId);
    return mapWithoutItem;
}
export function removeItemsFromMapByIds<T>(ids: string[], state: IState<T>) {
    const newMap = Object.entries(state.byId)
        .filter(([key, val]) => !ids.includes(key))
        .reduce((map, obj) => (map[obj[0]] = obj[1], map), {});
    return newMap;
}

type myPredicate = ([key, val]) => boolean;

export function removeItemsFromMapByPredicate<T>(predicate: myPredicate, state: IState<T>) {
    const newMap = Object.entries(state.byId)
        .filter(predicate)
        .reduce((map, obj) => (map[obj[0]] = obj[1], map), {});
    return newMap;
}
export function moveItemInArray(array: string[], index: number, offset: number) {
    const item2Move = array.splice(index, 1)[0];
    array.splice(index + offset, 0, item2Move);
}

export function newMapFromItems<T extends Bean>(exes: T[]): { [id: string]: T } {
    return exes.map(exe => ({ id: exe.id, exe: exe }))
        .reduce((map, obj) => (map[obj.id] = obj.exe, map), {});
}
