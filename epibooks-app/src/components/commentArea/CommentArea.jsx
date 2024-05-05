import React, { useState, useEffect } from 'react';
import CommentList from '../commentArea/CommentList';
import AddComment from '../addComment/AddComment';
import Loading from '../loading/Loading';
import Error from '../error/Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMzc4ZGU2MDQ3YjAwMTlmYTYwMmIiLCJpYXQiOjE3MTM3MTYxNTUsImV4cCI6MTcxNDkyNTc1NX0.WcZLcopHABvidVu2lpBabaaonMJpULTmyKO_k20OHBQ'
          }
        });
        if (!response.ok) {
          throw new Error('Errore durante il recupero dei commenti');
        }
        const data = await response.json();
        setComments(data);
        setIsError(false);
      } catch (error) {
        console.error('Errore durante il recupero dei commenti:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;