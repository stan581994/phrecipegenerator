import React from "react";
import { RecipeModel } from "../model/RecipeModel";

interface RecipeDetailsProps {
  recipe?: RecipeModel; // Make the recipe prop optional
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  console.log("recipte details: " + recipe);
  if (!recipe) {
    return <div>Loading...</div>; // Render a loading state or a message
  }

  return (
    <div>
      <h2>{recipe.dishName}</h2>
      <img src={recipe.imageUrl} alt={recipe.dishName} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Preparation Time: {recipe.preparationTime}</p>
      <p>Cooking Time: {recipe.cookingTime}</p>
      <p>Serving Size: {recipe.servingSize}</p>
      <p>Category: {recipe.category}</p>
    </div>
  );
};

export default RecipeDetails;
