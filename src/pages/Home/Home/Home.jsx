import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";

const Home = () => {
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
        <div className="grid grid-cols-4 p-4 gap-4">
          {categories.map((category) => (
            <FoodCategory key={category.id} category={category}></FoodCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
