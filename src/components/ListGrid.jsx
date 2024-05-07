import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListGrid = ({ dataList }) => {
  return (
    <Grid>
      {dataList.map((item) => {
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

export default ListGrid;
