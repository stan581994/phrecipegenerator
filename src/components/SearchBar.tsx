import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./SearchBar.css";
import { RecipeModel } from "../model/RecipeModel";
import RecipeList from "./RecipleList";

const SearchBar: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchRecipes = async (url: string) => {
    try {
      console.log("Fetching recipes from:", url);
      const response = await fetch(url);
      const data: RecipeModel[] = await response.json();
      console.log("data:", data);
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const url = `https://phrecipegenapi.onrender.com/recipe/${encodeURIComponent(
      searchQuery
    )}`;
    fetchRecipes(url);
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form className="d-flex search-bar-form" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search for recipes..."
              className="me-2"
              aria-label="Search"
              size="lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="primary" size="lg" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              fetchRecipes("https://phrecipegenapi.onrender.com/recipe/all")
            }
          >
            All
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="success"
            size="lg"
            onClick={() =>
              fetchRecipes(
                "https://phrecipegenapi.onrender.com/recipe/category/breakfast"
              )
            }
          >
            Breakfast
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="warning"
            size="lg"
            onClick={() =>
              fetchRecipes(
                "https://phrecipegenapi.onrender.com/recipe/category/dessert"
              )
            }
          >
            Dessert
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="danger"
            size="lg"
            onClick={() =>
              fetchRecipes(
                "https://phrecipegenapi.onrender.com/recipe/category/main_course"
              )
            }
          >
            Main dish
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <RecipeList recipes={recipes} />
      </Row>
    </Container>
  );
};

export default SearchBar;
