import { Container, Row, Col } from 'react-bootstrap';
import { MultiCube } from '../components/MultiCube';

export const MultiCubePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                <MultiCube />
                </Col>
            </Row>
        </Container>
    );
};