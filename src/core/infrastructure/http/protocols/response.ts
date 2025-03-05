import { ApiError, StatusError, TimeoutError, UnknownError } from '../../../error';
import { HttpStatusCode } from './status-code';

export type ApiResponse<T extends object> =
  | ApiError
  | UnknownError
  | TimeoutError
  | StatusError
  | ApiSuccessResponse<T>;

export type ApiSuccessResponse<T extends object> = {
  data: ApiResponseDataType<T>;
  status: HttpStatusCode.Ok;
};

export type ApiResponseDataType<T extends object> = T | ApiErrorResponse;

export interface ApiErrorResponse {
  data: {
    id: string;
    name: string;
  };
  error: ApiError;
}

export type HttpResponse<T extends object | string> =
  | TimeoutError
  | HttpSuccessResponse<T>;
export interface HttpSuccessResponse<T extends object | string> {
  data: T;
  status: HttpStatusCode.Ok;
}
