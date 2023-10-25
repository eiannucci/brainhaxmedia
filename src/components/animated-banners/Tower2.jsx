import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../../scss/AnimatedBannerAds.module.scss';

export const TowerSidePanel = () => {
    const textRef1 = useRef(null);

    const runBannerAnimation = () => {
        gsap.fromTo(
          textRef1.current,
          { opacity: 0, x: '100%' },
          {
            x: 0,
            duration: 1,
            ease: 'linear',
            opacity: 1,
          }
        );
    }

    useEffect(() => {
        runBannerAnimation();
      }, []);

    return (
        <div className={`${styles.banner} ${styles.bannerWidth160} ${styles.gradient1}`}>
            <h1 ref={textRef1}>Lo<br/>rem<br/>Ip<br/>sum</h1>
            <div className={styles['animated-panel']}>
                <h3>Dolor sit amet</h3>
                <h2>Sed eget efficitur tellus. Curabitur ac consectetur urna.</h2>
                <ul>
                    <li>Eget</li>
                    <li>Nullam</li>
                    <li>Sed</li>
                </ul>
            </div>
        </div>
    )
}

