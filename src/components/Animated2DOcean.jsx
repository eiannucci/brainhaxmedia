import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Wave from 'react-wavify';
import { gsap } from 'gsap';
import styles from '../scss/Animated2DOcean.module.scss';
import ReactGA from 'react-ga';

export const OceanWave = () => {
  const cloudRef = useRef(null);
  const cloudRef2 = useRef(null);

  useEffect(() => {
    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
    
    const tl = gsap.timeline({ repeat: 1, yoyo: true });
    tl.to(cloudRef.current, { duration: 100, x: 200, transform: 'translate(500px, 50px)' });
    tl.to(cloudRef.current, { duration: 100, y: 50, transform: 'translate(500px, 100px)' });

    tl.to(cloudRef2.current, { duration: 50, x: 55, transform: 'translate(500px, 20px)' });
    tl.to(cloudRef2.current, { duration: 50, y: 50, transform: 'translate(500px, 100px)' });

    return () => tl.kill();
  }, []);

  return (
    <Container className='g-0'>
      <Row>
        <Col xs={12}>
          <div className={styles['animation-bg']} style={{minHeight: '190px', position: 'relative' }}>
            <Wave
              fill='url(#oceanGradient)'
              paused={false}
              options={{
                height: 90,
                amplitude: 20,
                speed: 0.15,
                points: 3,
                style: {
                  height: '190px'
                }
              }}
            >
              <svg width="100%" viewBox="0 0 0 0" style={{ position: 'absolute', zIndex: -1, opacity: 4, }}>
                <defs>
                  <linearGradient id="oceanGradient" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="25%" stopColor="#ffc107" stopOpacity="1" />
                    <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="75%" stopColor="#9DE2FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9DE2FF" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              <svg viewBox="130 40 5 90">
                <filter id="gBlur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
                <defs>
                  <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#FCD440" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FDB813" stopOpacity="0.8" />
                  </radialGradient>
                </defs>
                <g filter="url(#gBlur)">
                  <circle cx="50" cy="50" r="25" fill="url(#sunGradient)" />
                  {[...Array(8)].map((_, i) => (
                    <rect
                      key={i}
                      x="49"
                      y="0"
                      width="2"
                      height="12"
                      fill="url(#sunGradient)"
                      transform={`rotate(${i * 45}, 50, 50)`}
                    />
                  ))}
                </g>
                <g ref={cloudRef} className="cloud" transform='translate(20, 50) scale(2, 1)' filter="url(#gBlur)">
                  <ellipse cx="5" cy="0" rx="20" ry="5" fill="#FFFFFF" opacity="0.6" />
                  <ellipse cx="15" cy="0" rx="20" ry="5" fill="#FFFFFF" opacity="0.8" />
                  <ellipse cx="20" cy="15" rx="20" ry="10" fill="#FFFFFF" opacity="0.6" />
                  <ellipse cx="0" cy="15" rx="20" ry="10" fill="#FFFFFF" opacity="0.4" />
                  <ellipse cx="10" cy="10" rx="25" ry="15" fill="#FFFFFF" opacity="0.6" />
                </g>

                <g ref={cloudRef2} className="cloud" transform='translate(10, 50) scale(4, 1)' filter="url(#gBlur)">
                  <ellipse cx="5" cy="5" rx="5" ry="2" fill="#FFFFFF" opacity="0.4" />
                  <ellipse cx="5" cy="0" rx="20" ry="10" fill="#FFFFFF" opacity="0.4" />
                  <ellipse cx="20" cy="15" rx="20" ry="10" fill="#FFFFFF" opacity="0.4" />
                  <ellipse cx="0" cy="15" rx="20" ry="10" fill="#FFFFFF" opacity="0.8" />
                  <ellipse cx="10" cy="10" rx="25" ry="15" fill="#FFFFFF" opacity="0.4" />
                </g>
              </svg>              
            </Wave>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


