import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-1">404</h1>
          <h2>Page Not Found</h2>
          <p className="lead">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
