import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { id, name, picture, total_recipes, experience, likes, bio, recipes } =
    chef;

  return (
    <div>
      <div className="grid lg:grid-cols-2 p-10 m-10 border border-solid border-black rounded-lg">
        <div className="w-full lg:border-r-4 border-r-green-400">
          <LazyLoad height={650}>
            <img className="p-10 mx-auto" src={picture} alt="" />
          </LazyLoad>
        </div>
        <div className="p-10 my-auto">
          <h3 className="text-5xl font-extrabold leading-10 mb-3">{name}</h3>
          <div className="text-2xl font-bold mb-3">
            <p>{bio}</p>
            <p className="text-teal-400">
              Total work Experience: {experience} years
            </p>
            <p className="text-pink-400">Total Recipes: {total_recipes}</p>
            <p className="text-amber-500">Total Likes by Customers: {likes}</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center text-5xl font-extrabold">
          Chefs Best Recipes
        </h1>
        <div className="grid lg:grid-cols-3 mt-5 p-5 gap-5">
          {recipes.map((recipe) => (
            <Recipes key={recipe.recipes_id} recipe={recipe}></Recipes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
