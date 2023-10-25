import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SVG } from "@svgdotjs/svg.js";
// import classNames from "classnames";
import gsap from "gsap";
import styles from '../scss/WaveFormAnimation.module.scss';

export const AnimatedWaveFormComponent = () => {
    useEffect(() => {
        const svg = SVG(".canvas");
        const { width, height } = svg.viewbox();
        // const space = 20;
        // const frequency = 30;

        // console.log(width, height);

        for (let i = 0; i < width; i += 20) {
            svg
                .ellipse(4, height - 20)
                .cx(i)
                .cy(height / 2)
                .fill("white");
        }

        let lines = gsap.utils.toArray(".canvas ellipse");

        // center origin to start
        let origin = 50;
        let lower = 30;
        let higher = 70;
        let ascending = true;

        lines.forEach((line) => {
            // set the origin
            gsap.set(line, {
                transformOrigin: `center ${origin}%`,
            });

            // if we go outside the range, flip direction
            if (origin >= higher || origin <= lower) {
                ascending = !ascending;
            }

            // increment or decrement the origin
            ascending ? (origin += 2) : (origin -= 2);

            // logging stuff
            // console.log(origin);
        });

        // animate them all smooth and shiz
        gsap.to(lines, {
            duration: 3,
            scaleY: 0.1,
            ease: "sine.inOut",
            stagger: {
                each: 0.3,
                repeat: -1,
                yoyo: true,
            },
        }).progress(0.5);
    }, []);

    return (
        <Container className={'g-0'}>
            <Row>
                <Col className={'g-0'}>
                    <div className={styles['svg-container']}>
                        <svg width={'100%'} className="canvas" viewBox="0 0 1000 100"></svg>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
