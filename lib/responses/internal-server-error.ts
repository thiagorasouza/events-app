import { ErrorResponse } from "../protocols/error-response";

export const InternalServerError = (): ErrorResponse => ({
  statusCode: 500,
  error: "InternalServerError",
});
