import { ApiError } from './api';
import { StatusError } from './status';
import { TimeoutError } from './timeout';
import { UnknownError } from './unknown';

export type ErrorType = ApiError | UnknownError | StatusError | TimeoutError;

export * from './api';
export * from './status';
export * from './timeout';
export * from './unknown';
