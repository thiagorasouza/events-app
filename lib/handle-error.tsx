interface ServerError {
  statusCode: number;
  message: string;
}

export const handleError = (serverError: ServerError) => {
  return (
    <>
      <h1>{serverError.message}</h1>
    </>
  );
};
