export class InternalServerError extends Error {
  constructor(error: any) {
    super("Internal Server Error");
    console.error(error);
  }
}
