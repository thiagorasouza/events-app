import { ErrorResponse } from "../protocols/error-response";

export const ValidationError = (): ErrorResponse => ({
  statusCode: 422,
  error: "ValidationError",
});
