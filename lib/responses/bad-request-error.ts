import { ErrorResponse } from "../protocols/error-response";

export const BadRequestError = (error: any): ErrorResponse => {
  console.error(error);
  return {
    statusCode: 400,
    error: "BadRequestError",
  };
};
