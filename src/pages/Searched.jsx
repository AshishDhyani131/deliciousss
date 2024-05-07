import React from "react";

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ListGrid from "../components/ListGrid";

const Searched = () => {
  const { search } = useParams();
  const searchList = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=9&query=${search}`,
    search,
    "results"
  );
  return <ListGrid dataList={searchList}></ListGrid>;
};

export default Searched;
