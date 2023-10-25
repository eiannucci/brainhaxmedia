import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import styles from "../scss/Footer.module.scss";
import classNames from "classnames";

export const Footer = () => {
  useEffect(() => {
    var gradients = [
      "linear-gradient(to right, #C8A2C8, #A692B7)",
      "linear-gradient(to right, #79aec1, #9B4F96)",
    ];

    gsap.to("footer", {
      duration: 5,
      backgroundImage: function () {
        return gradients[Math.floor(Math.random() * gradients.length)];
      },
      color: "#FFFFFF",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <footer
      className={classNames(
        styles["footer"],
        styles["footer-color"],
        "container-fluid",
        "text-center",
        " mt-auto",
        "py-3"
      )}
    >
      {/* <Container fluid className={styles["content-container"]}>
        <Row>
          <Col xs={4} className={styles.colContainer}>
            <ul className={styles.list}>
              <h5 className={styles.title}>APIs & Tools</h5>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">SEO</a>
              </li>
            </ul>
          </Col>
          <Col xs={4} className={styles.colContainer}>
            <ul className={styles.list}>
              <h5 className={styles.title}>Animations and Interactive</h5>
              <li>
                <a href="https://eiannucci.github.io/#/pg-cubewave">
                  Cube Wave
                </a>
              </li>
              <li>
                <a href="https://eiannucci.github.io/#/pg-insult-generator">
                  Shakespearean Insult Generator
                </a>
              </li>
              <li>
                <a href="https://eiannucci.github.io/#/pg-multicube">
                  MultiCube
                </a>
              </li>
              <li>
                <a href="https://eiannucci.github.io/#/pg-multicube">
                  MultiCube
                </a>
              </li>
              <li>
                <a href="https://eiannucci.github.io/#/pg-multicube">
                  MultiCube
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={4} className={styles.colContainer}>
            <ul className={styles.list}>
              <h5 className={styles.title}>Connect</h5>
              <li>
                <a href="mailto:elijah.iannucci@gmail.com?subject=Contact request from Elijah'a portfolio.">
                  Email Me
                </a>
              </li>
              <li>
                <a href="https://elijahiannucci.blogspot.com/">Blog</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/elijahiannucci/">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
      <Container fluid>
        <Row>
          <Col xs={12}>
            {/* <hr className={styles.divider} /> */}
            <span className={styles.copy}>&copy; 2023 Elijah Iannucci</span>
            
            {/* <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            >
           
              <img
                alt="Creative Commons License"
                style={{ borderWidth: "0" }}
                src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
              />
            </a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
