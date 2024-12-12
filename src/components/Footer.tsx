import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <p>&copy; 2024 Philippine Recipe Generator</p>
      </Container>
    </footer>
  );
};

export default Footer;
