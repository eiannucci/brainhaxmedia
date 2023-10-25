import React, { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, Spinner } from "react-bootstrap";
import { FaGalacticRepublic } from "react-icons/fa";
import { SolarBackToTopButton } from "./SolarBackToTopBtn";
import Form from "react-bootstrap/Form";
import ReactGA from "react-ga";
import styles from "../scss/SolarSearch.module.scss";
// import "../scss/FontFace.module.scss";

export const SolarSearchApp = () => {
  const [planets, setPlanets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://api.le-systeme-solaire.net/rest/bodies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Log the API data to the console
        console.log(data);

        // Extract the planet data and update the state
        const planetData = data.bodies.map((body) => {
          return {
            englishName: body.englishName,
            bodyType: body.bodyType,
            gravity: body.gravity,
            density: body.density,
          };
        });
        setPlanets(planetData);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    ReactGA.initialize("G-SSE6730X77");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Filter the planets based on the search text
  const filteredPlanets = planets.filter((planet) =>
    planet.englishName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <InputGroup className="my-3">
              <InputGroup.Text id="search-bar-button">
                <FaGalacticRepublic />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search planet"
                aria-label="Planet Search"
                aria-describedby="search-bar-button"
                value={searchText}
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        filteredPlanets.map((planet) => (
          <Container fluid className={"g-0"} key={planet.englishName}>
            <Row>
              <Col>
                <div className={styles["planet-container"]}>
                  <div style={{background:'#0000ff80', padding:'1rem', borderRadius: '10px'}}>
                    <SolarBackToTopButton />
                    <div className={styles["planet-name"]}>
                      {planet.englishName}
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Body Type:</span>
                      <span className={styles["type-details"]}>
                        {planet.bodyType}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Gravity:</span>
                      <span className={styles["type-details"]}>
                        {planet.gravity}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Density:</span>
                      <span className={styles["type-details"]}>
                        {planet.density}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ))
      )}
    </React.Fragment>
  );
};
