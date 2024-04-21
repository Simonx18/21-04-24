import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import SingleComment from '../singleComment/SingleComment';

const AddComment = ({ bookId, addComment }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!comment.trim() || isNaN(rate) || rate < 1 || rate > 5) {
      setError('Il testo della recensione non può essere vuoto e la valutazione deve essere un numero compreso tra 1 e 5');
      return;
    }

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/${bookId}/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMzc4ZGU2MDQ3YjAwMTlmYTYwMmIiLCJpYXQiOjE3MTM3MDk3ODEsImV4cCI6MTcxNDkxOTM4MX0.IhNfULwwFgKo7Kh42AJRoHTTaUC0Ft4OOTsWdIB3PZY',
        },
        body: JSON.stringify({
          comment: comment,
          rate: rate,
          elementId: bookId,
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio della recensione');
      }

      setSuccess(true);
      addComment();
      setComment('');
      setRate('');
      getComments();
    } catch (error) {
      console.error('Errore durante l\'invio della recensione:', error);
      setError('Si è verificato un errore durante l\'invio della recensione');
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`);
      if (!response.ok) {
        throw new Error('Errore nel recupero dei commenti');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Errore nel recupero dei commenti:', error);
      setError('Si è verificato un errore nel recupero dei commenti');
    }
  };

  return (
    <div>
      <h3>Aggiungi Recensione</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Recensione inviata con successo!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Label>Testo Recensione:</Form.Label>
          <Form.Control type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="rate">
          <Form.Label>Valutazione (da 1 a 5):</Form.Label>
          <Form.Control type="number" min="1" max="5" value={rate} onChange={(e) => setRate(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Invia Recensione</Button>
      </Form>
      <div>
        <h3>Commenti</h3>
        {comments.map((comment, index) => (
          <SingleComment key={index} review={comment} />
        ))}
      </div>
    </div>
  );
};

export default AddComment;