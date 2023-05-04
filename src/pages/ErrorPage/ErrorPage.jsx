import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-695.jpg?w=740&t=st=1683208979~exp=1683209579~hmac=627b31f76afc6c2246240a5d5839e3f9f5a51012d997d00635753ef2120b3c5f"
        alt="Error"
        className="w-64 h-64 mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">
        We're sorry, but the page you're looking for could not be found.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
