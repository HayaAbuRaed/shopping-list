import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={styles.carousel}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className={styles.carouselContent}>
        <h1 className={styles.carouselTitle}>Welcome to SimpleShopper</h1>
        <p className={styles.carouselDescription}>
          Your one-stop shop for all your shopping needs
        </p>
      </div>
    </div>
  );
};

export default Carousel;
