import { ErrorResponse } from "../protocols/error-response";

export const UnauthorizedError = (): ErrorResponse => ({
  statusCode: 401,
  error: "UnauthorizedError",
});
