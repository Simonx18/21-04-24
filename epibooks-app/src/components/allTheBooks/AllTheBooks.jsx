import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "../singleCard/SingleBook";

const AllTheBooks = ({ allBooks, searchText, setSearchText }) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Search by title"
        value={searchText}
        onChange={handleSearchChange}
      />
      <Row>
        {allBooks
          .filter(book => book.title.toLowerCase().includes(searchText.toLowerCase())) 
          .map((book, index) => (
            <Col key={`singlebook-${index}`} xs={12} md={4} lg={3}>
              <SingleBook
                title={book.title}
                img={book.img}
                price={book.price}
                category={book.category}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;