import { AxiosHeaders, Method, RawAxiosRequestHeaders } from 'axios';
import { HttpMethod } from './method';

type MethodsHeaders =
  | Partial<
      {
        [Key in Method as Lowercase<Key>]: AxiosHeaders;
      } & { common: AxiosHeaders }
    >
  | undefined;
export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: Record<string, string | boolean | number> | unknown;
  responseType?: ResponseType | undefined;
  headers?:
    | Record<string, string | boolean | number | undefined>
    | (RawAxiosRequestHeaders & MethodsHeaders)
    | AxiosHeaders
    | undefined;
};

export interface Request extends HttpRequest { }
export interface Response<Data> {
  status: number;
  data: Data;
}