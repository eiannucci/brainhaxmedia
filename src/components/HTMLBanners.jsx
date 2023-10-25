import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LeaderboardBottomPanel } from './animated-banners/Leaderboard1';
import { LeaderboardTopPanel } from './animated-banners/Leaderboard2';
import { LeaderboardSidePanel } from './animated-banners/Leaderboard3';
import { SqaureBottomPanel } from './animated-banners/Sqaure1';
import { Square2 } from "./animated-banners/Sqaure2";
import { Square3 } from "./animated-banners/Sqaure3";
import { TowerTopPanel } from './animated-banners/Tower1';
import { TowerSidePanel } from './animated-banners/Tower2';
import { TowerBottomPanel } from './animated-banners/Tower3';
import ReactGA from 'react-ga';
// import { VideoRevealBanner } from './ReactBannerVideoReveal';
// import { BlackWhiteBadge } from './BWBadge';

export const Banner = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }

    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
    
  }, []);

  return (
    <Container fluid ref={pageRef}>
      {/* <Row>
        <Col>
        <BlackWhiteBadge />
          <VideoRevealBanner />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <LeaderboardBottomPanel />
          <LeaderboardTopPanel />
          <LeaderboardSidePanel />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TowerTopPanel />
        </Col>
        <Col xs={4}>
          <TowerSidePanel />
        </Col>
        <Col xs={4}>
          <TowerBottomPanel />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}>
          <SqaureBottomPanel />
        </Col>
        <Col xs={12} lg={4}>
          <Square2 />
        </Col>
        <Col xs={12} lg={4}>
          <Square3 />
        </Col>
      </Row>
    </Container>
  );
};
