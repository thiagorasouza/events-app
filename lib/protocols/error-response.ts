export interface ErrorResponse {
  statusCode: 400 | 404 | 401 | 422 | 500;
  error: string;
}
