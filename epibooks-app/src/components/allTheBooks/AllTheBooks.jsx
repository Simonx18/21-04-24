import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import fantasy from '../../data/fantasy.json';
import SingleBook from "../singleCard/SingleBook";

const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(null);

  return (
    <Row>
      <Col md={12}>
        <Row className="g-2 mt-3">
          {fantasy
            .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((book) => (
              <Col xs={12} md={3} key={book.asin}>
                <SingleBook
                  book={book}
                  selected={selected === book.asin}
                  setSelected={() => setSelected(book.asin)}
                />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default AllTheBooks;