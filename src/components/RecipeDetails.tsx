import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeModel } from "../model/RecipeModel";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./RecipeDetails.css";

interface RecipeDetailsProps {
  dishName: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ dishName }) => {
  const [recipe, setRecipe] = useState<RecipeModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://phrecipegenapi.onrender.com/recipe/${dishName}`
        );
        const data: RecipeModel = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [dishName]);

  const addToFavorites = () => {
    if (recipe) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Recipe added to favorites!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>No recipe found.</div>;
  }

  return (
    <Container className="recipe-details fade-in">
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={() => navigate("/home")}>
          Back to Home
        </Button>
      </div>
      <Card className="mt-4 fade-in">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={recipe.imageUrl}
              alt={recipe.dishName}
              className="card-img-top"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{recipe.dishName}</Card.Title>
              <Card.Text>
                <strong>Preparation Time:</strong> {recipe.preparationTime}
                <br />
                <strong>Cooking Time:</strong> {recipe.cookingTime}
                <br />
                <strong>Serving Size:</strong> {recipe.servingSize}
                <br />
                <strong>Category:</strong> {recipe.category}
              </Card.Text>
              <h3>Ingredients</h3>
              <ListGroup variant="flush">
                {recipe.ingredients.map((ingredient, index) => (
                  <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
              <h3>Instructions</h3>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
              <Button
                variant="success"
                onClick={addToFavorites}
                className="mt-3"
              >
                Add to Favorites
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default RecipeDetails;
