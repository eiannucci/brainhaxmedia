import { Container, Row, Col } from 'react-bootstrap';
import { HeroSearchApp } from '../components/HeroSearch';

export const HeroSearchPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                <HeroSearchApp />
                </Col>
            </Row>
        </Container>
    );
};