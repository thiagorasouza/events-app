export class InternalServerError extends Error {
  constructor(error: any) {
    super("Internal Server Error");
    this.name = "InternalServerError";
    console.error(error);
  }
}
