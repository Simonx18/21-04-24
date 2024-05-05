import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({ comment: '', rate: 1 });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const sendComment = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify({ ...comment, elementId: asin }),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMzc4ZGU2MDQ3YjAwMTlmYTYwMmIiLCJpYXQiOjE3MTM3MTYxNTUsImV4cCI6MTcxNDkyNTc1NX0.WcZLcopHABvidVu2lpBabaaonMJpULTmyKO_k20OHBQ',
        },
      });

      if (!response.ok) {
        throw new Error('Errore');
      }

      setSuccess(true);
      setComment({ comment: '', rate: 1 });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            name="comment"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            name="rate"
            value={comment.rate}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Recensione inviata con successo!</Alert>}
    </div>
  );
};

export default AddComment;