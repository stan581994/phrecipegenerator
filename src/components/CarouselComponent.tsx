import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./CarouselComponent.css"; // Import the CSS file
import { Link } from "react-router-dom";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="carousel_image_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption-bg">
          <h3>Welcome to Philippine Recipe Generator</h3>
          <p>
            Looking for a recipe to cook Philippine dishes. Start search now!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="carousel_image_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption-bg">
          <h3>Pork Tamarind Stew (Sinigang)</h3>
          <p>
            Sinigang is a popular Filipino soup or stew characterized by its
            sour and savory flavor, typically associated with tamarind. This
            comforting dish is often made with pork, vegetables, and a
            tamarind-based broth, making it a favorite in many Filipino
            households.
          </p>
          <Link to={`/recipe/view/Sinigang`}>
            <Button variant="warning" className="carousel-button">
              Generate Recipe Now!
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="carousel_image_3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption-bg">
          <h3>Fried Vegetable Spring Rolls (Lumpiang Toge)</h3>
          <p>
            Lumpiang Toge, or Fried Vegetable Spring Rolls, is a delicious
            Filipino snack made with a mixture of bean sprouts and other
            vegetables wrapped in a thin crepe and fried to a crispy perfection.
            It's a popular street food that is both healthy and satisfying.
          </p>
          <Link to={`/recipe/view/Kare-Kare`}>
            <Button variant="warning" className="carousel-button">
              Generate Recipe Now!
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
