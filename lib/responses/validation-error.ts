import { ErrorResponse } from "../protocols/error-response";

export const ValidationError = (error: any): ErrorResponse => {
  console.error(error);
  return {
    statusCode: 422,
    error: "ValidationError",
  };
};
