import axios from 'axios';
import { HttpRequest, IError } from '../../model/baseTypes';
import { ApiResponse } from './protocols';

export interface ISendApiRequest {
    <T extends object>(requestData: HttpRequest): Promise<ApiResponse<T>>;
}

export interface IHttpClient {
    sendApiRequest: ISendApiRequest;
}

export const useHttpClient = () => {
    const apiUrl = '';

    const sendApiRequest: ISendApiRequest = async <T extends object>(requestData: HttpRequest): Promise<ApiResponse<T>> => {
        try {
            const response = await axios<T>({
                url: `${apiUrl}${requestData.url}`,
                method: requestData.method,
                data: requestData.body,
                headers: requestData.headers,
                timeout: 300000, // 5 minutos
                responseType: requestData.responseType || 'json',
            });

            return { status: response.status, data: response.data };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const apiError: IError = {
                    message: error.message,
                    code: error.response?.data?.code || 'UNKNOWN_ERROR',
                    status: error.response?.status || 500,
                    name: ''
                };
                throw apiError;
            }
            throw error;
        }
    };

    return { sendApiRequest };
};