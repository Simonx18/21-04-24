import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookResponse = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}`);
        if (!bookResponse.ok) {
          throw new Error('Errore nel recupero dei dettagli del libro');
        }
        const bookData = await bookResponse.json();
        setBook(bookData);

        const commentsResponse = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments`);
        if (!commentsResponse.ok) {
          throw new Error('Errore nel recupero delle recensioni del libro');
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Errore nel recupero dei dettagli del libro e delle recensioni:', error);
      }
    };

    fetchBookDetails();
  }, [asin]);

  if (!book) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div>
      <h2>Dettagli del libro</h2>
      <p>Titolo: {book.title}</p>
      <p>Autore: {book.author}</p>
      <p>Prezzo: {book.price}</p>
      <p>Categoria: {book.category}</p>
      <h3>Recensioni</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            <p>Autore: {comment.author}</p>
            <p>Recensione: {comment.comment}</p>
            <p>Valutazione: {comment.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;