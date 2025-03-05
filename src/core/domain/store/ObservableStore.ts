import { CommandState } from "../../model/baseTypes";

export class ObservableStore<T> {
    private _state: CommandState<T>;
    private observers: ((state: CommandState<T>) => void)[] = [];

    constructor(initialState: CommandState<T>) {
        this._state = initialState;
    }

    get state(): CommandState<T> {
        return this._state;
    }

    set state(newState: CommandState<T>) {
        this._state = newState;
        this.observers.forEach(observer => observer(newState));
    }

    subscribe(observer: (state: CommandState<T>) => void): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: (state: CommandState<T>) => void): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
}