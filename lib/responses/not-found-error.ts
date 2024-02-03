import { ErrorResponse } from "../protocols/error-response";

export const NotFoundError = (error: any): ErrorResponse => {
  console.error(error);
  return {
    statusCode: 404,
    error: "NotFound",
  };
};
