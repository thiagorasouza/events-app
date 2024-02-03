import { ErrorResponse } from "../protocols/error-response";

export const InternalServerError = (error: any): ErrorResponse => {
  console.error(error);
  return {
    statusCode: 500,
    error: "InternalServerError",
  };
};
