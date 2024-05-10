import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Not Found</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <p className="text-2xl text-black font-bold">Page not found! :(</p>

        <Link to={"/"}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
