export interface CommandState<Result> {
    data: Result | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    error?: Error | null;
}

export interface IError extends Error {
    message: string;
    code?: string | number;
    status?: number;
}

export type HttpRequest = {
    url: string;
    method: string;
    body?: object | null;
    headers?: Record<string, string>;
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer' | 'stream';
};