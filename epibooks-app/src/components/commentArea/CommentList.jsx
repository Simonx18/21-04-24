import React from 'react';
import SingleComment from '../singleComment/SingleComment';

const CommentList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <div>Nessuna recensione disponibile</div>;
  }

  return (
    <div>
      <h3>Lista Recensioni</h3>
      <ul>
        {reviews.map((review, index) => (
          <SingleComment key={index} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;