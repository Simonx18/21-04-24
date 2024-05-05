import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import CommentArea from '../commentArea/CommentArea';

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}`);
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dettagli del libro');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Errore nel recupero dei dettagli del libro:', error);
      }
    };

    fetchBookDetails();
  }, [asin]);

  if (!book) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={asin} />
      </Col>
    </Row>
  );
};

export default BookDetails;