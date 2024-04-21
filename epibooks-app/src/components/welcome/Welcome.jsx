import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col } from "react-bootstrap";

const AlertWelcome = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Alert key="dark" variant="dark">
                        Welcome to EpicBooks!
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}

export default AlertWelcome;