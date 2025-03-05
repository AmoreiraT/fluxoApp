import { useState } from 'react';
import { User } from '../domain/entities/User';
import { useAuthRepository } from './useAuthRepository';

export const useAuth = () => {
    const authRepository = useAuthRepository();
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const userData = await authRepository.login({ email, password });
        setUser(userData);
    };

    return { user, login };
};