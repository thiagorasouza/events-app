import { ErrorResponse } from "../protocols/error-response";

export const UnauthorizedError = (error: any): ErrorResponse => {
  console.error(error);
  return {
    statusCode: 401,
    error: "UnauthorizedError",
  };
};
