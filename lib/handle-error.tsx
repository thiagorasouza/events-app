export const handleError = (error: Error) => {
  return (
    <>
      <h1>{error.message}</h1>
    </>
  );
};
