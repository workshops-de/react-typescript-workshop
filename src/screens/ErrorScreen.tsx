export type ErrorScreenProps = {
  error: Error;
};

export const ErrorScreen = ({ error }: ErrorScreenProps) => {
  return (
    <div className="error-screen">
      <h1>Oops, something went wrong...</h1>
      <div>{error.message}</div>
    </div>
  );
};
