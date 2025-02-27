import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      {/* <p className="text-gray-600 mt-2">Oops! The page you are looking for doesn't exist.</p> */}
      <Link
        to="/home"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
