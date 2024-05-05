import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from '../singleComment/SingleComment';

const CommentList = ({ commentsToShow }) => {
  if (!commentsToShow || commentsToShow.length === 0) {
    return <div>Nessuna recensione disponibile</div>;
  }

  return (
    <ListGroup style={{ color: 'black' }} className="mt-2">
      {commentsToShow.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
};

export default CommentList;