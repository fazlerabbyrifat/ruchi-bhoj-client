import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";
import { useLoaderData, useParams } from "react-router-dom";
import ChefCard from "./ChefCard/ChefCard";

const Home = () => {
  const chefsInfo = useLoaderData();
  const chefsDetails = chefsInfo.chefs;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="my-5">
        <h1 className="text-3xl font-extrabold text-center text-violet-400">
          Our Food Categories
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
          {categories.map((category) => (
            <FoodCategory key={category.id} category={category}></FoodCategory>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-3xl font-extrabold text-center text-violet-400">
          Our Best Chefs
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {chefsDetails.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
