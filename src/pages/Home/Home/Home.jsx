import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard/ChefCard";
import { FadeLoader } from "react-spinners";
import gallery1 from "../../../assets/decoration1.jpg";
import gallery2 from "../../../assets/decoration2.jpg";
import gallery3 from "../../../assets/decoration3.jpg";
import gallery4 from "../../../assets/decoration4.jpg";
import gallery5 from "../../../assets/decoration5.jpg";
import gallery6 from "../../../assets/decoration6.jpg";

const Home = () => {
  const chefsInfo = useLoaderData();
  const chefsDetails = chefsInfo.chefs;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-ruchi-bhoj-server-fazlerabbyrifat.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader></FadeLoader>
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <div className="my-5">
        <h1 className="text-5xl font-extrabold text-center text-teal-400">
          Our Food Categories
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
          {categories.map((category) => (
            <FoodCategory key={category.id} category={category}></FoodCategory>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-5xl font-extrabold text-center text-teal-400">
          Our Best Chefs
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {chefsDetails.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-5xl font-extrabold text-center text-teal-400">
          Our Gallery
        </h1>
        <p className="text-center text-xl font-bold mt-3">
          With our great selection of dishes from all over the world you can
          feel yourself as a traveler and true gourmet!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
          <img className="h-96 w-full" src={gallery1} alt="" />
          <img className="h-96 w-full" src={gallery2} alt="" />
          <img className="h-96 w-full" src={gallery3} alt="" />
          <img className="h-96 w-full" src={gallery4} alt="" />
          <img className="h-96 w-full" src={gallery5} alt="" />
          <img className="h-96 w-full" src={gallery6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
