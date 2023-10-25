import { Container, Row, Col } from "react-bootstrap";
import styles from "../scss/FireBadge.module.scss"; 

export const AnimatedFireBadge = () => {
    return (
        <header className="App-header">
            <Container fluid>
                <Row>
                    <Col>
                        <div className={styles.fire}>
                            <p>Hot Favorite</p>
                            <div className={styles["fire-left"]}>
                                <div className={styles["main-fire"]}></div>
                                <div className={styles["particle-fire"]}></div>
                            </div>
                            <div className={styles["fire-center"]}>
                                <div className={styles["main-fire"]}></div>
                                <div className={styles["particle-fire"]}></div>
                            </div>
                            <div className={styles["fire-right"]}>
                                <div className={styles["main-fire"]}></div>
                                <div className={styles["particle-fire"]}></div>
                            </div>
                            <div className={styles["fire-bottom"]}>
                                <div className={styles["main-fire"]}></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
