import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CommentArea from '../commentArea/CommentArea';

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <Card
        onClick={() => setSelected()}
        style={{
          border: selected ? '3px solid red' : 'none',
        }}
        data-testid="book-card"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
          {showComments && <CommentArea asin={book.asin} />}
          <Button
            className="w-100 mt-2"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? 'Nascondi Commenti' : 'Mostra Commenti'}
          </Button>
          <Button
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            VAI AI DETTAGLI
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook