import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {id, picture, total_recipes, experience, name, likes} = chef;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total recipes: {total_recipes}</p>
          <p>Experience: {experience} years</p>
          <p>Total likes by customers: {likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chefsinfo/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
