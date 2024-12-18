import React, { useEffect, useState } from "react";
import { RecipeModel } from "../model/RecipeModel";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FavoriteRecipe.css";

const FavoriteRecipes: React.FC = () => {
  const [favorites, setFavorites] = useState<RecipeModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (dishName: string) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.dishName !== dishName
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <div>No favorite recipes found.</div>;
  }

  return (
    <Container>
      <h1>My Favorite Recipes</h1>
      {favorites.map((recipe, index) => (
        <Card key={index} className="mt-4 favorite-card">
          <Card.Img variant="top" src={recipe.imageUrl} alt={recipe.dishName} />
          <Card.Body>
            <Card.Title>{recipe.dishName}</Card.Title>
            <Button
              variant="primary"
              onClick={() => navigate(`/recipe/view/${recipe.dishName}`)}
              className="me-2"
            >
              View
            </Button>
            <Button
              variant="danger"
              onClick={() => removeFromFavorites(recipe.dishName)}
            >
              Remove from Favorites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default FavoriteRecipes;
