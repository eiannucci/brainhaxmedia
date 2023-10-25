import { React, useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { gsap } from "gsap";
import classNames from 'classnames';
import ReactGA from 'react-ga';
// import { Button } from "@chakra-ui/button";

import styles from '../scss/AnimatedMediaCards.module.scss';
import 'holderjs';

export const MultipleCardsPage = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  // const [lat, setLat] = useState(null);
  // const [long, setLong] = useState(null);
  // const [state, setState] = useState(null);
  const [img, setImg] = useState(null);
  const [empEmail, setEmpEmail] = useState(null);
  const [cell, setCell] = useState(null);
  const [username, setUsername] = useState(null);
  // const [regDate, setregDate] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFirstName(data.results[0].name.first);
        setLastName(data.results[0].name.last);
        // setCity(data.results[0].location.city);
        setCountry(data.results[0].location.country);
        // setLat(data.results[0].location.coordinates.latitude);
        // setLong(data.results[0].location.coordinates.longitude);
        // setState(data.results[0].location.state);
        setImg(data.results[0].picture.large);
        setEmpEmail(data.results[0].email);
        setCell(data.results[0].cell);
        setUsername(data.results[0].login.username);
        // setregDate(data.results[0].registered.date);
      });

    gsap.to(".box", { rotate: 360, duration: 10 });
    gsap.to('.box', { duration: 2.5, ease: "power2.out", x: 300 });
    gsap.fromTo('.circle', { x: -40, background: 'blue', borderRadius: '0', duration: 5 }, { x: '100%', background: 'green', borderRadius: '100%', duration: 5 });
    gsap.to('.card-body', {
      duration: 5,
      backgroundColor: function () {
        var colors = ['#7B6C9E', '#B0A8B9', '#DAC8B4', '#6E7A8A', '#BFC0C0', '#E6E2AF', '#F0ECEA', '#C3B5A5', '#A2A2A1', '#B8A1A7'];
        return colors[Math.floor(Math.random() * colors.length)];
      },
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
    
  }, []);

  return (
    <Container className="py-3">
      <Row>
        <Col xs={12} md={4} className={'mb-3'}>
          <div className={'card'}>
            <img className={'card-image-top'} src={img} alt="Card cap" />
            <div className={classNames(styles['custom-card-body-2'], styles['border'], 'text-white')}>
              <Card.Body>
                <Card.Text>
                  <h1 className={'card-text'}>{firstName}&nbsp;{lastName}</h1>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4} className={'mb-3'}>
          <div className={'card'}>
            <img className={'card-image-top'} src={img} alt="Card cap" />
            <div className={classNames(styles['custom-card-body-2'], styles['border'], 'text-white')}>
              <Card.Body>
                <Card.Text>
                  <h1 className={'card-text'}>{firstName}&nbsp;{lastName}</h1>
                  Curabitur imperdiet, sapien at semper varius, neque sapien.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4} className={'mb-3'}>
          <Card>
            <Card.Img variant="top" src={img} />
            <div className={classNames(styles['custom-card-body-2'], 'text-white')}>
              <Card.Body>
                <Card.Text>
                  <h1 className={'card-text'}>{firstName}&nbsp;{lastName}</h1>
                  Donec dictum dui est. Ut gravida sem elementum, semper ipsum aliquam, accumsan arcu.
                </Card.Text>
              </Card.Body>
            </div>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>email: {empEmail}</ListGroup.Item>
              <ListGroup.Item>Cell: {cell}</ListGroup.Item>
              <ListGroup.Item>Country: {country}</ListGroup.Item>
              <ListGroup.Item>Username: {username}</ListGroup.Item>
            </ListGroup>
            <Card.Link className={'p-3'}>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Link>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col className={'mb-2 custom-card-body-3'}>
          <div className={'card text-center'}>
            <div className={styles['card-text']}>
              Featured
            </div>
            <div className={classNames(styles['custom-card-body-4'], styles['border'], 'text-white', 'card-body')}>
              <h5 className={'card-title'}>Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <a href="https://eiannucci.github.io/" className={'btn btn-primary'}>Go somewhere</a>
            </div>
            <div className={'card-footer text-muted'}>
              2 days ago
            </div>
          </div>
        </Col>
      </Row>


    </Container>
  );
};
