import { useState } from 'react';
import { User } from '../domain/entities/User';
import { useAuthRepository } from './useAuthRepository';

export const useAuth = () => {
    const authRepository = useAuthRepository();
    const [user, setUser] = useState<User | null>(null);

    const login = async (phone: string, code: string) => {
        const userData = await authRepository.loginWithPhone(phone, code);
        setUser(userData);
    };

    return { user, login };
};