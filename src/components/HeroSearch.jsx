import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Spinner,
  Card,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../scss/FontFace.module.scss";
import styles from "../scss/HeroSearch.module.scss";
import { BackToTopButton } from "./HeroBackToTopBtn";
import ReactGA from 'react-ga';


export const HeroSearchApp = () => {
  const [heroStateOne, setHeroStateOne] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const urlRef = useRef();

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const heroSet1 = [];
        for (let index = 0; index < data.length; index++) {
          heroSet1.push(data[index]);
        }
        setHeroStateOne(heroSet1);
        setIsLoading(false);
      });

      ReactGA.initialize('G-SSE6730X77');
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log(ReactGA);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHeroes = heroStateOne.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <React.Fragment>
      <Container className="pt-3">
        <Row>
          <Col>
            <InputGroup className="my-3">
              <InputGroup.Text
                id="search-bar-button"
                className={styles["search-btn"]}
              >
                s
              </InputGroup.Text>
              <Form.Control
                placeholder="Search any Meta-Human"
                aria-label="Search any Meta-Human"
                aria-describedby="search-bar-button"
                value={searchTerm}
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {isLoading && (
        <Container className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}

      {!isLoading &&
        filteredHeroes.map((fullHeroSet) => {
          return (
            <Card className={styles["herocard"]} key={fullHeroSet.alterEgos}>
              <Container fluid>
                <Row>
                  <Col xs={12} md={4} className='g-0'>
                    <BackToTopButton />
                    <Card.Img
                      variant="top"
                      className="card-img"
                      src={fullHeroSet.images.lg}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={10}>
                    <p>
                      <span className={styles["spanh1"]}>
                        {fullHeroSet.name}
                      </span>
                      <span className={styles["hero-text"]}>AKA: </span>
                      {fullHeroSet.biography.aliases.map((alias, index) => {
                        if (fullHeroSet.biography.aliases[0] === "-") {
                          return <span>"No AKA"</span>;
                        } else if (fullHeroSet.biography.aliases.length > 1) {
                          return (
                            <span className={styles["hero-text"]}>{alias}</span>
                          );
                        } else {
                          return (
                            <span className={styles["hero-text"]}>{alias}</span>
                          );
                        }
                      })}
                    </p>
                    <p>
                      <span className={styles["hero-text"]}>
                        Affiliations: <br />
                        {fullHeroSet.connections.groupAffiliation.replace(/[,]/g, " /")}
                      </span>
                    </p>
                    <p>
                      <span className={styles["hero-text"]}>
                        Family: <br />
                        {fullHeroSet.connections.relatives.replace(/[,]/g, " / ")}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Row>
                    <p>
                      <span className={styles["hero-text"]}>
                        Facts about {fullHeroSet.name}: <br />
                      </span>
                    </p>
                  </Row>
                  <Row>
                    <Col xs={12} md={4} className={styles["sidekick-text"]}>
                      <ul>
                        <li>Intelligence: {fullHeroSet.powerstats.intelligence}</li>
                        <li>Strength: {fullHeroSet.powerstats.strength}</li>
                        <li>Speed: {fullHeroSet.powerstats.speed}</li>
                        <li>Durability: {fullHeroSet.powerstats.durability}</li>
                        <li>Power: {fullHeroSet.powerstats.power}</li>
                      </ul>
                    </Col>
                    <Col xs={12} md={4} className={styles["sidekick-text"]}>
                      <ul>
                        <li>Gender: {fullHeroSet.appearance.gender}</li>
                        <li>Race: {fullHeroSet.appearance.race}</li>
                        <li>
                          Height: {fullHeroSet.appearance.height[0]} /{" "}
                          {fullHeroSet.appearance.height[1]}
                        </li>
                        <li>
                          Weight: {fullHeroSet.appearance.weight[0]} /{" "}
                          {fullHeroSet.appearance.weight[1]}
                        </li>
                        <li>Eye Color: {fullHeroSet.appearance.eyeColor}</li>
                        <li> Hair Color: {fullHeroSet.appearance.hairColor}</li>
                      </ul>
                    </Col>
                    <Col xs={12} md={4} className={styles["sidekick-text"]}>
                      <ul>
                        <li>Full Name: {fullHeroSet.biography.fullName}</li>
                        <li>Alter Egos: {fullHeroSet.biography.alterEgos}</li>
                        <li>Day Job: {fullHeroSet.work.occupation}</li>
                        <li>Birthplace: {fullHeroSet.biography.placeOfBirth}{" "}</li>
                        <li>
                          First Appearance:{" "}
                          {fullHeroSet.biography.firstAppearance}
                        </li>
                        <li>Publisher: {fullHeroSet.biography.publisher}</li>
                      </ul>
                    </Col>
                  </Row>
                </Row>
              </Container>
            </Card>
          );
        })}
    </React.Fragment>
  );
};
