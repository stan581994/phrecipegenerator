import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="/recipe.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Philippine Recipe Generator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
