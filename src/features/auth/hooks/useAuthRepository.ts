import { AuthRepositoryImpl } from '../infrastructure/repositories/AuthRepositoryImpl';

export const useAuthRepository = () => {
    const repository = new AuthRepositoryImpl();
    return repository;
};