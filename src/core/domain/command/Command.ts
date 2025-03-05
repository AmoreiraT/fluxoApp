import { UseMutationOptions } from '@tanstack/react-query';
import { CommandState, IError } from '../../model/baseTypes';

export interface CommandParams<Params, Result, TError extends IError> {
    cmd: {
        mutateFn: (params: Params) => Promise<Partial<Result>>;
        options?: Omit<UseMutationOptions<Result, TError, Params | null>, 'mutationFn'>;
    };
    store: {
        getState: () => CommandState<Result>;
        setState: (state: CommandState<Result>) => void;
    };
    mapResult: (data: Partial<Result>, currentState: Result) => CommandState<Result>;
}

export interface Command<Params, Result> {
    execute: (params: Params) => CommandState<Result>;
}