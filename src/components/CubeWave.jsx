import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import styles from "../scss/CubeWave.module.scss";
import gsap from "gsap";

export const CubeWave = () => {

  useEffect(() => {
    const select = (e) => document.querySelector(e);

    let styleVars;
    let numRowsCols;
    let numCubes;
    let cube;
    let grid;

    const init = () => {
      // let cubeWidth;
      styleVars = getComputedStyle(document.documentElement);
      numRowsCols = styleVars.getPropertyValue("--numRowsCols");
      // cubeWidth = parseInt(styleVars.getPropertyValue("--cube-size").replace("px", ""));
      numCubes = numRowsCols * numRowsCols;
      cube = select(`.${styles.cube}`);
      grid = select(`.${styles.grid}`);

      for (let i = 0; i < numCubes - 1; i++) {
        const clone = cube.cloneNode(true);
        grid.appendChild(clone);
      }

      gsap.set(`.${styles.container}`, { autoAlpha: 1 });
      gsap.set(`.${styles.cube}`, { rotateY: 90, transformOrigin: "right center" });

      gsap.to(`.${styles.grid}`, {
        x: "random(0, 0)",
        y: "random(0, 0)",
        rotateY: "random(0, 0)",
        repeat: -1,
        repeatDelay: 1,
        repeatRefresh: true,
        ease: "sine.inOut",
        duration: 6,
      });

      gsap.timeline({ delay: 0.5 }).to(`.${styles.cube}`, {
        duration: 0.6,
        scaleX: 0.09,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
          yoyo: true,
          repeat: -1,
          grid: [numRowsCols, numRowsCols],
          from: "start",
        },
      });
    };

    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);

    init();
  }, []);

  return (
    <div className={styles.container}>
      {/* <div style={{width:'100%',  position: 'absolute'}}></div> */}

      <div className={styles.grid}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles["face--front"]}`}></div>
          <div className={`${styles.face} ${styles["face--back"]}`}></div>
          <div className={`${styles.face} ${styles["face--left"]}`}></div>
          <div className={`${styles.face} ${styles["face--right"]}`}></div>
          <div className={`${styles.face} ${styles["face--top"]}`}></div>
          <div className={`${styles.face} ${styles["face--bottom"]}`}></div>
        </div>
      </div>
    </div>
  );
};
