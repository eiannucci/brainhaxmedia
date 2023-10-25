import { Container, Row, Col } from 'react-bootstrap';
import { SolarSearchApp } from '../components/SolarSearch';

export const SolarSearchPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                <SolarSearchApp />
                </Col>
            </Row>
        </Container>
    );
};