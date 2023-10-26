import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import styles from "../scss/BandStats.module.scss";

export const BandStatsAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("/api/bandstats.json")
      .then((response) => {
        console.log(response.data);
        setData(response.data.bands);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container fluid className={styles["bandstats-container"]}>
      <Row>
        {data.map((item, index) => (
          <Col xs={12} lg={6} md={6}>
            <Container key={index} className={styles["band-info-container"]}>
              <Row>
                <Col xs={12} className="pt-1 ps-3 text-center">
                  <h1>{item.band_name}</h1>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col className={styles["center-image-xs"]}>
                  <img
                    onLoad={() => setLoading(false)}
                    src={item.album_cover}
                    alt={item.band_name}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} lg={3}>
                  <Row>
                    <h2>Members:</h2>
                    <Col>
                      <ul>
                        {item.members.map((member, memberIndex) => (
                          <li key={memberIndex}>{member.name}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} lg={3}>
                  <h2>Stats:</h2>
                  <div>Year Formed: {item.formed_year}</div>
                  <div>Album Sales: {item.album_sales}</div>
                  <div>Studio Albums: {item.studio_albums}</div>
                  <div>Known Songs: {item.recorded_songs}</div>
                  <div>Known Revenue: {item.estimated_total_revenue}</div>
                </Col>
                <Col xs={6} lg={3}>
                  <h2>Albums:</h2>
                  <ul>
                    {item.albums &&
                      item.albums.map((album, albumIndex) => (
                        <li key={albumIndex}>{album.title}</li>
                      ))}
                  </ul>
                </Col>
                <Col xs={6} lg={3}>
                  <h2>Highest Charted Song:</h2>
                  {item.highest_charted_song && (
                    <ul>
                      <li>Title: {item.highest_charted_song.title}</li>
                      <li>Album: {item.highest_charted_song.album}</li>
                      <li>Year: {item.highest_charted_song.year}</li>
                      {item.highest_charted_song.chart_peak && (
                        <li>
                          Chart Peak (USA):{" "}
                          {item.highest_charted_song.chart_peak.US}
                        </li>
                      )}
                    </ul>
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// import { useState, useEffect } from "react";
// import { Col, Container, Row, Spinner } from "react-bootstrap";
// import ReactGA from "react-ga";

// import styles from "../scss/BandStats.module.scss";

// export const BandStatsAPI = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://bandstatsapi-default-rtdb.firebaseio.com/bands.json"
//       );
//       const jsonData = await response.json();
//       const sortedData = Object.values(jsonData).sort((a, b) => {
//         if (a.band_name < b.band_name) {
//           return -1;
//         }
//         if (a.band_name > b.band_name) {
//           return 1;
//         }
//         return 0;
//       });
//       setData(sortedData);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     setTimeout(() => {
//       ReactGA.initialize("G-SSE6730X77");
//       ReactGA.pageview(window.location.pathname + window.location.search);
//       console.log(window.location.pathname + window.location.search);
//       console.log(ReactGA.pageview);
//     }, 1000);
//   }, []);

//   return (
//     <Container fluid>
//       {loading ? (
//         <div className="d-flex justify-content-center my-5">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Row>
//           {data.map((band, index) => (
//             <Col key={index} xs={12} lg={6}>
//               <div className={styles["band-info-container"]}>
//                 <h2>{band.band_name}</h2>
//                 <img
//                   onLoad={() => setLoading(false)}
//                   className={styles["band-img"]}
//                   src={band.album_cover}
//                   alt={band.band_name}
//                   width="200"
//                 />
//                 <Container fluid>
//                   <Row>
//                     <Col className="g-0">
//                       <p>Formed in {band.formed_year}</p>
//                       <p>Studio albums: {band.studio_albums}</p>
//                       <p>Recorded songs: {band.recorded_songs}</p>
//                       <p>Album sales: {band.album_sales}</p>
//                       <p>
//                         Estimated total revenue: {band.estimated_total_revenue}
//                       </p>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       {band.members && (
//                         <ul>
//                           <h4>Members:</h4>
//                           {band.members.map((member) => (
//                             <li key={member.name}>
//                               {member.name} ({member.instruments.join(", ")})
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </Col>

//                     <Col xs={12}>
//                       {band.albums && band.albums.length > 0 ? (
//                         <ul>
//                           <h4>Albums:</h4>
//                           {band.albums.map((album) => (
//                             <li key={album.title}>
//                               {album.title} ({album.year})
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <p>No albums found.</p>
//                       )}
//                     </Col>

//                     <Col xs={12}>
//                       <h4>Highest charted song:</h4>
//                       {band.highest_charted_song && (
//                         <p key={band.highest_charted_song.title}>
//                           {band.highest_charted_song.title} (
//                           {band.highest_charted_song.year})
//                         </p>
//                       )}
//                     </Col>
//                   </Row>
//                 </Container>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };
