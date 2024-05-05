import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = ({ books }) => {
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} xs={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;