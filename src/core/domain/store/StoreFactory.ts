import { CommandState } from '../../model/baseTypes';
import { ObservableStore } from './ObservableStore';

export const StoreFactory = {
    create<T>(initialState: CommandState<T>): ObservableStore<T> {
        return new ObservableStore(initialState);
    },
};