import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searched = () => {
  const { search } = useParams();
  const [searchList, setSearchList] = useState([]);
  //   console.log(searchList);
  useEffect(() => {
    getSearchData().then((res) => setSearchList(res.results));
  }, [search]);
  const getSearchData = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&query=${search}`
    );
    const data = await res.json();
    return data;
  };
  return (
    <Grid>
      {searchList.map((item) => {
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
export default Searched;
