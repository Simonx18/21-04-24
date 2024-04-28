import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from '../addComment/AddComment';

const CommentArea = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMzc4ZGU2MDQ3YjAwMTlmYTYwMmIiLCJpYXQiOjE3MTM3MTYxNTUsImV4cCI6MTcxNDkyNTc1NX0.WcZLcopHABvidVu2lpBabaaonMJpULTmyKO_k20OHBQ' // Sostituisci con l'autorizzazione fornita
          }
        });
        if (!response.ok) {
          throw new Error('Errore durante il recupero delle recensioni');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Errore durante il recupero delle recensioni:', error);
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      fetchReviews();
    }
  }, [bookId]);

  return (
    <div>
      <h3>Commenti</h3>
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : (
        <>
          <CommentList reviews={reviews} />
          <AddComment bookId={bookId} /> 
        </>
      )}
    </div>
  );
};

export default CommentArea;