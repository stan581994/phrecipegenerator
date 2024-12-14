import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RecipeModel } from "../model/RecipeModel";
import "./RecipleList.css";

interface RecipeListProps {
  recipes: RecipeModel[] | RecipeModel; // Allow recipes to be an array or a single object
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  // Ensure recipes is an array
  const recipeArray = Array.isArray(recipes) ? recipes : [recipes];

  return (
    <Container>
      <h2 className="my-4">Recipes</h2>
      <Row>
        {recipeArray.map((recipe, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={recipe.imageUrl}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{recipe.dishName}</Card.Title>
                <Card.Text>A brief description of {recipe.dishName}.</Card.Text>
                <Link to="/recipe/view/">
                  <Button variant="primary">View Recipe</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
