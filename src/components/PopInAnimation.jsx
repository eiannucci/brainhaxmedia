import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import styles from '../scss/PopInBtn.module.scss';

export const ShapeShiftAnimation = () => {
    const containerRef = useRef(null);

    const RunAnimation = () => {
        const container = containerRef.current;
        const squares = container.querySelectorAll(".square");
        const tl = gsap.timeline({
            onComplete: () => {
                tl.reverse();
            }
        });

        squares.forEach(square => {
            tl.to(
                square,
                {
                    duration: 0.25,
                    x: () => gsap.utils.random(-90, 100),
                    y: () => gsap.utils.random(-90, 100),
                    scale: gsap.utils.random(2, 4),
                    opacity: 1,
                    rotation: () => gsap.utils.random(-720, 720),
                    top: "50%",
                    ease: "bounce.out",
                    repeat: 0,
                    yoyo: true,
                    yoyoDuration: 5,
                    borderRadius: () => gsap.utils.random(0, 50),
                    backgroundColor: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
                },
                "+=0.25"
            );
        });

        tl.play();

        return () => {
            tl.kill();
        };
    }

    return (
        <Container fluid className={styles['ExplodingButton']} >
            <Row>
                <Col>
                    <div ref={containerRef} className={styles['sq-container']}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="square"
                                style={{
                                    position: "absolute",
                                    left: `calc(50% - ${75/2}px)`,
                                    top: `calc(50% - ${75}px)`,
                                    width: "75px",
                                    height: "75px",
                                    backgroundColor: "#ff0000",
                                    borderRadius: "10px",
                                    zIndex: '5'
                                }}
                            >
                                <p className={styles['pop-in-text']}>Pop-In</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className={'py-3'}>
                    <button onClick={RunAnimation} className={styles['run-btn']}>Run Animation</button>
                </Col>
            </Row>
        </Container>
    );
};
