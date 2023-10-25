import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactGA from 'react-ga';
import styles from "../scss/MultiCube.module.scss";

export const MultiCube = () => {
  var windowHeight = window.innerHeight;


  var middle = windowHeight / 2;

  var topPosition = middle - (336 / 2);
  var cube = document.getElementById('cube');

  if (cube) {
    // The cube element exists, so we can access its style property
    cube.style.top = topPosition + 'px';
  } else {
    // The cube element doesn't exist, so we can't access its style property
    console.error('Cube element not found');
  }

  useEffect(() => {
    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);
  
  return (
    <Container id="cube">
      <Row>
        <Col>
          <div className={styles.container}>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className={styles.cube}>
              <div style={{ "--x": -1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 0, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
              <div style={{ "--x": 1, "--y": 0 }}>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 1 }}></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
