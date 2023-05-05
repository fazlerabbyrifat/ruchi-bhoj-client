import React from "react";
import { SingleDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Link } from "react-router-dom";

const BookTable = () => {
  return (
    <div className="rounded mt-5 mx-20 p-8 shadow-md">
      <form className="mx-auto max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="relative max-h-40">
          <SingleDatePicker
            style={{ width: "450px" }}
            startDate={new Date(2023, 4, 5)}
            startWeekDay="saturday"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 font-bold text-gray-700"
          >
            Message (Optional)
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="text-center">
          <Link>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-teal-400 rounded hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookTable;
