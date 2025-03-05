import { AxiosHeaders } from 'axios';
import { HttpStatusCode } from '../infrastructure/http/protocols/status-code';

export interface ApiError {
  code: number;
  message: string;
  type: string;
  response: ResponseError;
}

export interface ResponseError {
  config: Map<string, unknown>;
  data: DataError;
  headers: AxiosHeaders | unknown;
  request: XMLHttpRequest;
  status: HttpStatusCode;
  statusText: string;
}

export interface DataError {
  data: string | null | Map<string, unknown>;
  error: boolean;
  code: string;
  message: string;
  b2k_error: boolean;
}
