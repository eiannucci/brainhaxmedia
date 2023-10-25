import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
// import { MultiCube } from "./MultiCube";
import { OceanWave } from './Animated2DOcean';
// import { SplitLayerAnimation } from './SplitLayerAnimation';
import { AnimatedWaveFormComponent } from './WaveFormAnimation';
import { ShapeShiftAnimation } from './PopInAnimation';
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import styles from '../scss/AnimationPageCarousel.module.scss';
import ReactGA from 'react-ga';

const comps = [<OceanWave />, <AnimatedWaveFormComponent />, <ShapeShiftAnimation />];

export const AnimationsCarouselControlled = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // const handlePrevious = () => {
    //     setSelectedIndex((selectedIndex - 1 + comps.length) % comps.length);
    // };

    const handleNext = () => {
        setSelectedIndex((selectedIndex + 1) % comps.length);
    };

    useEffect(() => {
        ReactGA.initialize('G-SSE6730X77');
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log(ReactGA);
      }, []);

    return (
        <div className={styles['carousel-container']}>
            <AwesomeSlider
                selected={selectedIndex}
                organicArrows={false}
                buttons={false}
                bullets={false}
                animation="cubeAnimation"
                cssModule={[{ cubeAnimation: { sliceCount: 10 } }]}
            >
                {comps.map((comp, index) => (
                    <div key={index}>{comp}</div>
                ))}
            </AwesomeSlider>
            <div  style={{ display: "flex", justifyContent: "center" }}>
                {/* <button onClick={handlePrevious} className={styles['control-btns']}>Previous</button> */}
                <button onClick={handleNext} className={styles['control-btns']}>Next</button>
            </div>
        </div>
    );
};