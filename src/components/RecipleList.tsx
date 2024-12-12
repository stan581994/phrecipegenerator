import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const RecipeList: React.FC = () => {
  return (
    <Container>
      <h2 className="my-4">Recipes</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="carousel_image_2.jpg" />
            <Card.Body>
              <Card.Title>Recipe 1</Card.Title>
              <Card.Text>A brief description of Recipe 1.</Card.Text>
              <Button variant="primary">View Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="carousel_image_2.jpg" />
            <Card.Body>
              <Card.Title>Recipe 2</Card.Title>
              <Card.Text>A brief description of Recipe 2.</Card.Text>
              <Button variant="primary">View Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="carousel_image_2.jpg" />
            <Card.Body>
              <Card.Title>Recipe 3</Card.Title>
              <Card.Text>A brief description of Recipe 3.</Card.Text>
              <Button variant="primary">View Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeList;
