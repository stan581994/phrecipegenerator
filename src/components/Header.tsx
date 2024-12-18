import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            alt=""
            src="/recipe.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Philippine Recipe Generator
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/recipe/myfavorite">
            <FaHeart color="white" size="1.5em" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
