import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SearchBar = (props) => {


    const [input, setInput] = useState("");

    
    const handleInput = (e) => {
        if (e.target.value === "") {
            props.setBooks(props.booksStart)
        }
        setInput(e.target.value)
    }

    const filterBooks = () => {
        
        const filterByTitle = props.allBooks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
        props.setBooks(filterByTitle)
    }

    return(
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-between gap-3 py-3">
                        <input className="w-100" type="text" onChange={handleInput}/>
                        <button onClick={filterBooks} className="btn btn-primary">Search</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;