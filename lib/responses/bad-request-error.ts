import { ErrorResponse } from "../protocols/error-response";

export const BadRequestError = (): ErrorResponse => ({
  statusCode: 400,
  error: "BadRequestError",
});
