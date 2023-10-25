import React, { useState, useEffect } from "react";
import styles from "../scss/SolarBackToTopBtn.module.scss";

export const SolarBackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const shouldShowButton = window.scrollY > 100;

    if (shouldShowButton && !isVisible) {
      setIsVisible(true);
    } else if (!shouldShowButton && isVisible) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className={styles["btt-btn"]} onClick={scrollToTop}>
          <p>Back to Top</p>
        </div>
      )}
    </>
  );
};
