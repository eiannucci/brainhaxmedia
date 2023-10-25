import { Container, Row, Col } from "react-bootstrap";
import { ShakespeareanInsults } from "../components/InsultGenerator";

export const InsultGeneratorPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ShakespeareanInsults />
                </Col>
            </Row>
        </Container>
    );
};