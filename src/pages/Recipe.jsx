import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Recipe = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    getRecipeData().then((res) => setRecipeDetails(res));
  }, [recipeId]);
  const getRecipeData = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  };
  //   console.log(recipeId);
  return (
    <DetailWrapper>
      <div>
        <h2 className="text-3xl font-bold">{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
            <p
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    margin: 2rem 0rem;
  }
`;
const Button = styled.span`
  padding: 1rem 1.5rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div``;

export default Recipe;
