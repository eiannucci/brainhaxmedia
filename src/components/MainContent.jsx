import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AnimatedFireBadge } from "../components/FireBadge";
import { OceanWave } from "../components/Animated2DOcean";
import classNames from "classnames";
import ReactGA from 'react-ga';
import styles from "../scss/MainContent.module.scss";
import "../scss/FireBadge.module.scss";
import BannerImage from '../images/med-banner-thumb.png';
import MultiCube from '../images/multicube.png';
import CubeWave from '../images/cubewave.png';

let btnList = [
  {
    img: "https://bracketfights.com/images/hero/2019/marvel-vs-dc-superheroes-16387/1616215860.jpg",
    title: "Super Search",
    desc: "Find info & stats on almost any superhero known to man... or Superman...",
    id: "SuperHeroSearch",
    firebadge: true,
    image: true,
  },
  {
    img: "",
    title: "SVG animation",
    desc: "An animated SVG. Incredibly light, plays nicely with tools like GSAP and react-wavify.",
    id: "Animations",
    oceanwaves: true,
    image: false,
  },
  {
    img: MultiCube,
    title: "The Multicube..",
    desc: "Hover or drag over the small cubes. Could be implemented a number of ways, even as a navigation...",
    id: "Multicube",
    // oceanwaves: true,
    image: true,
  },
  {
    img: "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%20shakespeare/authors/shakespeare-people-page.jpg",
    title: "Shakespearian Insult Generator",
    desc: "Insult Thyself...",
    id: "InsultGenerator",
    image: true,
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/DQyNHder4hmYdLZ4Wf5oS3.jpg",
    title: "Solar System Search",
    desc: "A full listing of the solar system's celestial bodies to search through.",
    id: "SolarSystemSearch",
    image: true,
  },
  {
    img: CubeWave,
    title: "Going wild with Greensock",
    desc: "Testing out Greensock's versatility...",
    id: "CubeWave",
    image: true,
  },
  {
    img: BannerImage,
    title: "Animated Banner Ads",
    desc: "Examples of popular banner sizes found on the web...",
    id: "Banners",
    image: true,
  },
  {
    img: "https://townsquare.media/site/366/files/2020/12/90salbums.jpg",
    title: "Band Stats",
    desc: "An API I created from scratch, hosted on Firebase, to deliver you all the gritty details about your favorite bands...",
    id: "BandStats",
    firebadge: false,
    image: true,
  },
];

export const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const handleTileClick = (e) => {
    // console.log(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case "SuperHeroSearch":
        return navigate("/pg-superhero-search");
      case "InsultGenerator":
        return navigate("/pg-insult-generator");
      case "SolarSystemSearch":
        return navigate("/pg-solar-search");
      case "MediaCards":
        return navigate("/pg-media-cards");
      case "Multicube":
        return navigate("/pg-multicube");
        case "Animations":
          return navigate("/pg-animations");
      case "Banners":
        return navigate("/pg-html-banners");
      case "BandStats":
        return navigate("/pg-customapi-bandstats");
        case "CubeWave":
          return navigate("/pg-cubewave");
      default:
        return console.log("/pg-home");
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);

  return (
    <Container fluid>
      <Row>
        {isLoading ? (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          btnList.map((btn, i) => {
            return (
              <Col xs={12} md={6} key={i} className="my-3">
                <Container className={styles["card-tile-container"]} >
                  <div
                    onClick={handleTileClick}
                    id={btn.id}
                    className={styles["shadow"]}                  >
                    <Row>
                      <Col
                        className={classNames(
                          styles["card-view"],
                          "d-flex",
                          "justify-content-center"
                        )}
                      >
                        {btn.image && (
                          <img
                            src={btn.img}
                            alt="tile"
                            className={styles["tile-img"]}
                          />
                        )}
                        {btn.oceanwaves && <OceanWave />}
                      </Col>
                    </Row>
                    {btn.firebadge && <AnimatedFireBadge />}
                    <Container
                      fluid
                      className={`${styles["hex-bg"]} ${styles[""]}`}
                    >
                      <Row>
                        <Col xs={12} className={styles["info-panel"]}>
                          <div className={styles["tile-heading"]}>
                            {btn.title}
                          </div>
                          <div className={styles["tile-desc"]}>{btn.desc}</div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Container>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};