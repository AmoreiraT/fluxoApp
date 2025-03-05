import { HttpStatusCode } from "../infrastructure/http/protocols";

export type StatusError = {
  status: Exclude<HttpStatusCode, HttpStatusCode.Ok>;
};
