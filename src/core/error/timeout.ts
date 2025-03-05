import { ResponseError } from './api';

export type TimeoutError = {
  code: string;
  message: string;
  name: string;
  response: ResponseError;
};
