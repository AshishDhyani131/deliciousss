import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ListGrid from "../components/ListGrid";

import useFetch from "../hooks/useFetch";
const Cuisine = () => {
  const { type } = useParams();
  const cuisineList = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&number=9&cuisine=${type}`,
    type,
    "results"
  );
  return <ListGrid dataList={cuisineList}></ListGrid>;
};

export default Cuisine;
