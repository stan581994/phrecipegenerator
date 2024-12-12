import React from "react";
import RecipeDetails from "./RecipeDetails";
import IngredientList from "./IngredientList";

const ViewRecipe = () => {
  return (
    <div>
      <RecipeDetails />

      <IngredientList />
    </div>
  );
};

export default ViewRecipe;
