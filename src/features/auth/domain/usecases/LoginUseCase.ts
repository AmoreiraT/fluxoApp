import { useCreateCommand } from '../../../../core/domain/command/useCreateCommand';
import { IError } from '../../../../core/model/baseTypes';
import { User } from '../entities/User';
import { AuthRepository } from '../repositories/AuthRepository';

export const useLoginUseCase = (authRepository: AuthRepository) => {
    const loginUseCase = useCreateCommand<{ email: string; password: string }, User, IError>({
        cmd: {
            mutateFn: async (credentials) => await authRepository.login(credentials),
        },
        store: {
            getState: () => ({ data: {} as User, isLoading: false, isError: false, isSuccess: true }),
            setState: (state) => console.log(state), // Implementar com state management
        },
        mapResult: (data, currentState) => ({
            ...currentState,
            data: { ...data, ...currentState },
            isLoading: false,
            isSuccess: true,
            isError: false,
        }),
    });

    return { execute: loginUseCase.execute };
};