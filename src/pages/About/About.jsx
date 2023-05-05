import React from "react";
import bannerPic from "../../../src/assets/resturant .jpg";

const About = () => {
  return (
    <div>
      <div className="max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 p-5">
            <div className="relative">
              <img src={bannerPic} alt="" />
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 md:flex md:items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Welcome to RuchiBhoj!
              </h2>
              <p className="text-xl text-gray-600">
                A restaurant that serves all kinds of Bangladeshi food
              </p>
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg uppercase tracking-wider">
                Explore our menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Our history</h3>
            <p className="text-gray-600">
              RuchiBhoj was founded in 2005 by a group of passionate chefs who
              wanted to bring the flavors of Bangladesh to a wider audience.
            </p>
          </div>
          <div className="bg-gray-100 shadow rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Our team</h3>
            <p className="text-gray-600">
              Our team of talented chefs and servers are dedicated to providing
              a high-quality dining experience for our customers.
            </p>
          </div>
          <div className="bg-gray-100 shadow rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Our location</h3>
            <p className="text-gray-600">
              We are located in the heart of the city, with easy access to
              public transportation and parking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;