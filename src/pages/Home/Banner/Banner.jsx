import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <section
        className="banner bg-center bg-cover text-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-content max-w-6xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-amber-500">
          Satisfy your <br /> cravings
          </h1>
          <p className="banner-subtitle text-lg md:text-xl lg:text-2xl font-bold mb-8 text-red-600">
            with our authentic <br /> Bangladeshi dishes <br /> made with love and care
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
