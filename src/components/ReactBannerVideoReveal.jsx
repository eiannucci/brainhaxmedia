import React, { useState } from 'react';
import styled from 'styled-components';
import { BlackWhiteBadge } from './BWBadge';
import styles from '../scss/VideoRevealBanner.module.scss';

const Container = styled.div`
  position: relative;
  padding-bottom: 1rem; /* 16:9 aspect ratio */
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background-color: #2196F3;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: transparent;

    video {
      transform: scale(1);
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0); /* Start hidden */
    transition: transform 0.5s ease;
  }
`;

export const VideoRevealBanner = ({ videoUrl }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoadedData = () => {
    setVideoLoaded(true);
  };

  return (
    <Container className={styles['video-reveal-container']}>
      <Box>
        {!videoLoaded && null}
        <video
          src={'https://samplelib.com/lib/preview/mp4/sample-20s.mp4'}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleLoadedData}
        />
        <p>Roll Over For More Info</p>
        <p>Aliquam orci risus, feugiat quis diam sagittis, porta sagittis nisi. </p>
        <div className={styles['txt-background-btm']}>Suspendisse sit amet erat id dolor consectetur pharetra.</div>
        <BlackWhiteBadge />
      </Box>
    </Container>
  );
};
