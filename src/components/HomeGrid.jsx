import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
const HomeGrid = ({ dataArr }) => {
  return (
    <div className="">
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {dataArr.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card>
                  <h4>{recipe.title}</h4>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient></Gradient>
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
  min-height: 14rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: cover;
  }
  h4 {
    position: absolute;
    z-index: 10;
    color: white;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default HomeGrid;
