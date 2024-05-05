import React from 'react';
import { Col, Row } from 'react-bootstrap'

const NotFound = () => (
  <Row className="justify-content-center my-4">
    <Col xs={12} md={6}>
      <div className="text-center">
        <h1>404</h1>
        <h2>La pagina che stai cercando non è disponibile.</h2>
      </div>
    </Col>
  </Row>
)

export default NotFound
