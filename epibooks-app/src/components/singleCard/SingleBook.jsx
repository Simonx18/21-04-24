import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommentArea from '../commentArea/CommentArea';

const SingleBook = ({ asin, title, img, price, category, setSelectedBook }) => {
  const [selected, setSelectedState] = useState(false);

  const handleClick = () => {
    setSelectedState(!selected);
    setSelectedBook(asin);
  };

  return (
    <Col xs={12} md={4} lg={3}>
      <div className={selected ? 'card-selected' : ''}>
        <div className="card-container my-3">
          <h2 className="card-title py-2 text-truncate">{title}</h2>
          <img className="card-img" src={img} alt={title} />
          <p>Price: {price}€</p>
          <p>Category: {category}</p>
          <Button onClick={handleClick} className="btn btn-primary">
            {selected ? 'Hide Comments' : 'Show Comments'}
          </Button>
          <Link to={`/book/${asin}`} className="btn btn-secondary">View Details</Link>
        </div>
        {selected && <CommentArea bookId={asin} />}
      </div>
    </Col>
  );
};

export default SingleBook;