import React from "react";
import useFetch from "../hooks/useFetch";
import HomeGrid from "./HomeGrid";

function Veggie() {
  const veggiesArr = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=9&tags=vegetarian`,
    "veggie",
    "recipes"
  );
  return <HomeGrid dataArr={veggiesArr}></HomeGrid>;
}

export default Veggie;
