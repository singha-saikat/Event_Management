import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center h-screen text-2xl"
        id="error-page"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
