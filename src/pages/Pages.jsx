import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
      <Route path="/searched/:search" element={<Searched></Searched>}></Route>
      <Route path="/recipe/:recipeId" element={<Recipe></Recipe>}></Route>
    </Routes>
  );
}

export default Pages;
