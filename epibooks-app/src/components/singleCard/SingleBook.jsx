import React, { useState } from 'react';
import CommentArea from '../commentArea/CommentArea';

const SingleBook = ({ asin, title, img, price, category }) => {
  const [selected, setSelected] = useState(false);
  const [comments, setComments] = useState([]);

  const selectedBooks = async () => {
    setSelected(!selected);
    if (!selected) {
    }
  };

  return (
    <div className={selected ? 'card-selected' : ''}>
      <div className="card-container my-3">
        <h2 className="card-title py-2 text-truncate">{title}</h2>
        <img className="card-img" src={img} alt={title} />
        <p>Price: {price}€</p>
        <p>Category: {category}</p>
        <button onClick={selectedBooks} className="btn btn-primary">
          {selected ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      {selected && <CommentArea comments={comments} />}
    </div>
  );
};

export default SingleBook;