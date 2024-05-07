import React from "react";

import useFetch from "../hooks/useFetch.js";
import HomeGrid from "./HomeGrid.jsx";

function Popular() {
  const popularRecipesArr = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=9`,
    "popular",
    "recipes"
  );

  return <HomeGrid dataArr={popularRecipesArr}></HomeGrid>;
}
export default Popular;
