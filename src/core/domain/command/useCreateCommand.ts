import { useMutation } from '@tanstack/react-query';
import { CommandState, IError } from '../../model/baseTypes';
import { Command, CommandParams, } from './Command';

export function useCreateCommand<Params, Result, TError extends IError>({
    cmd,
    store,
    mapResult,
}: CommandParams<Params, Result, TError>): Command<Params, Result> {
    const { mutateFn, options } = cmd;

    const mutation = useMutation<Result, TError, Params>({
        mutationFn: async (params: Params) => {
            const result = await mutateFn(params);
            if (!result) throw new Error('Result cannot be null or undefined');
            const currentState = store.getState().data ?? ({} as Result);
            const res = mapResult(result, currentState).data;
            return res as Result;
        },
        ...options,
        onSuccess: (data: Result) => {
            store.setState({ ...store.getState(), data, isLoading: false, isSuccess: true });
        },
        onError: (error: TError) => {
            store.setState({ ...store.getState(), error, isLoading: false, isError: true });
        },
    });

    const execute = (params: Params): CommandState<Result> => {
        mutation.mutate(params);
        return store.getState();
    };

    

    return { execute };
}