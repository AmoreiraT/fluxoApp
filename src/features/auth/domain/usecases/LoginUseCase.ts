import { useCreateCommand } from '../../../../core/domain/command/useCreateCommand';
import { IError } from '../../../../core/model/baseTypes';
import { User } from '../entities/User';
import { AuthRepository } from '../repositories/AuthRepository';

export const useLoginUseCase = (authRepository: AuthRepository) => {
    const loginUseCase = useCreateCommand<{ phone: string; code: string }, User, IError>({
        cmd: {
            mutateFn: async ({ phone, code }) =>
                await authRepository.loginWithPhone(phone, code),
        },
        store: {
            getState: () => ({ data: {} as User, isLoading: false, isError: false, isSuccess: true }),
            setState: (state) => console.log(state),
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