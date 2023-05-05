import React, { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {  FaHeart, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toast";

const Recipes = ({ recipe }) => {
  const { recipes_id, ingredients, method, name, rating } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isStored, setIsStored] = useState(false);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    const isAlreadyStored = storedRecipes?.find((storedRecipe) => storedRecipe.recipes_id === recipes_id);
    setIsStored(isAlreadyStored);
  }, [])

  const handleFavorite = () => {

    // store favorite recipes in  local storage
    const storedRecipes = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    const isStored = storedRecipes?.find((storedRecipe) => storedRecipe.recipes_id === recipes_id);

    if(!isStored){
      const newRecipe = { recipes_id, ingredients, method, name, rating };
      const updatedRecipes = [...storedRecipes, newRecipe];
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedRecipes));

      setIsFavorite(true);
      setIsStored(true);
      toast.success(`${name} added to favorites!`);
    }
    else{
          setIsStored(true);
          setIsFavorite(false);
          toast.error(`${name} already added to favorites!`);
        }
  };

  return (
    <>
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Recipe's name: {name}</h2>
          <p className="text-xl font-semibold">Ingredients:</p>
          {ingredients?.map((ingredient, index) => <ul
          key={index}
          >
            <li className="text-lg font-medium list-disc list-inside">{ingredient}</li>
          </ul>)}
          <p>Cooking Method: {method}</p>
          <div className="card-actions justify-between items-center">
            <div className="flex items-center gap-3">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <span>{rating}</span>
            </div>
            <button onClick={handleFavorite} disabled={isFavorite}>
                {
                    isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />
                }
                <ToastContainer delay={2000}></ToastContainer>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
