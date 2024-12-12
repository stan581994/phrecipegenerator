import React from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./SearchBar.css"; // Import the CSS file

const SearchBar: React.FC = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form className="d-flex search-bar-form">
            <FormControl
              type="search"
              placeholder="Search for recipes..."
              className="me-2"
              aria-label="Search"
              size="lg"
            />
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
