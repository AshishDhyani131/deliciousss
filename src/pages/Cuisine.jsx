import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const Cuisine = () => {
  const { type } = useParams();
  const [cuisineList, setCuisineList] = useState([]);

  useEffect(() => {
    getCuisineData().then((res) => setCuisineList(res.results));
  }, [type]);
  const getCuisineData = async () => {
    const check = localStorage.getItem(type);
    if (check) {
      return JSON.parse(check);
    }
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&cuisine=${type}`
    );
    const data = await res.json();
    localStorage.setItem(type, JSON.stringify(data));
    return data;
  };
  return (
    <Grid>
      {cuisineList.map((item) => {
        return (
          <Link to={`/recipe/${item.id}`}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2rem;
`;
const Card = styled.div`
  img {
    width: 100%;

    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
