import React, { lazy, Suspense } from "react";
import Home from "./Home";
// import Cuisine from "./Cuisine";
// import Searched from "./Searched";
// import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

const CuisinePage = lazy(() => import("./Cuisine"));
const SearchedPage = lazy(() => import("./Searched"));
const RecipePage = lazy(() => import("./Recipe"));
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/cuisine/:type"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <CuisinePage></CuisinePage>
          </Suspense>
        }
      ></Route>
      <Route
        path="/searched/:search"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <SearchedPage></SearchedPage>
          </Suspense>
        }
      ></Route>
      <Route
        path="/recipe/:recipeId"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <RecipePage></RecipePage>
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default Pages;
