import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ReactGA from "react-ga";

import styles from "../scss/BandStats.module.scss";

export const BandStatsAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bandstatsapi-default-rtdb.firebaseio.com/bands.json"
      );
      const jsonData = await response.json();
      const sortedData = Object.values(jsonData).sort((a, b) => {
        if (a.band_name < b.band_name) {
          return -1;
        }
        if (a.band_name > b.band_name) {
          return 1;
        }
        return 0;
      });
      setData(sortedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      ReactGA.initialize("G-SSE6730X77");
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log(window.location.pathname + window.location.search);
      console.log(ReactGA.pageview);
    }, 1000);
  }, []);

  return (
    <Container fluid>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {data.map((band, index) => (
            <Col key={index} xs={12} lg={6}>
              <div className={styles["band-info-container"]}>
                <h2>{band.band_name}</h2>
                <img
                  onLoad={() => setLoading(false)}
                  className={styles["band-img"]}
                  src={band.album_cover}
                  alt={band.band_name}
                  width="200"
                />
                <Container fluid>
                  <Row>
                    <Col className="g-0">
                      <p>Formed in {band.formed_year}</p>
                      <p>Studio albums: {band.studio_albums}</p>
                      <p>Recorded songs: {band.recorded_songs}</p>
                      <p>Album sales: {band.album_sales}</p>
                      <p>
                        Estimated total revenue: {band.estimated_total_revenue}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      {band.members && (
                        <ul>
                          <h4>Members:</h4>
                          {band.members.map((member) => (
                            <li key={member.name}>
                              {member.name} ({member.instruments.join(", ")})
                            </li>
                          ))}
                        </ul>
                      )}
                    </Col>

                    <Col xs={12}>
                      {band.albums && band.albums.length > 0 ? (
                        <ul>
                          <h4>Albums:</h4>
                          {band.albums.map((album) => (
                            <li key={album.title}>
                              {album.title} ({album.year})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No albums found.</p>
                      )}
                    </Col>

                    <Col xs={12}>
                      <h4>Highest charted song:</h4>
                      {band.highest_charted_song && (
                        <p key={band.highest_charted_song.title}>
                          {band.highest_charted_song.title} (
                          {band.highest_charted_song.year})
                        </p>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
