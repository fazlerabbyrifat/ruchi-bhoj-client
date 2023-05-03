import React from "react";

const Recipes = ({ recipe }) => {
  console.log(recipe);
  const { recipes_id, ingredients, method, name, rating } = recipe;

  return (
    <>
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Recipe's name: {name}</h2>
          <p className="text-xl font-semibold">Ingredients:</p>
          {ingredients?.map(ingredient => <ul>
            <li className="text-lg font-medium list-disc list-inside">{ingredient}</li>
          </ul>)}
          <p>Cooking Method: {method}</p>
          <div className="card-actions">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
