import React from "react";

const FoodCategory = ({ category }) => {
  const { id, name, image, details } = category;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={image}
            alt="foods"
          />
        </figure>
        <div className="card-body mt-20 text-center">
          <h2 className="card-title text-3xl font-bold mx-auto">{name}</h2>
          <p className="text-xl font-semibold">{details}</p>
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
