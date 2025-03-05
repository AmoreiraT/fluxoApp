import { ApiResponse } from "../../../../core/infrastructure/http/protocols";
import { useHttpClient } from "../../../../core/infrastructure/http/useHttpClient";
import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";

export class AuthRepositoryImpl implements AuthRepository {
    private httpClient = useHttpClient();

    async fetch(params: { email: string; password: string }): Promise<User> {
        return this.login(params);
    }

    async login(credentials: { email: string; password: string }): Promise<User> {
        const response: ApiResponse<User> = await this.httpClient.sendApiRequest({
            url: '/auth/login',
            method: 'POST',
            body: credentials,
        });

        if (response instanceof Error) {
            throw response;
        }

        if('data' in response && 'error' in response.data) {
            throw response.data.error;
        }

        if (!('data' in response) || !('id' in response.data)) {
            throw new Error('Invalid response format');
        }

        return {
            id: response.data.id,
            email: response.data.email,
            name: response.data.name,
            token: response.data.token,
        };
    }
}