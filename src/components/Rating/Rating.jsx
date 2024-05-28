import React, { useState } from "react";
import styles from "./Rating.module.css";

const Rating = ({
  maxRating = 5,
  initialRating = 0,
  onRatingChange,
  readOnly = false,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleClick = (index) => {
    if (readOnly) return;

    setRating(index);

    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  const getStarFillPercentage = (index) => {
    const currentRating = hover !== null ? hover : rating;

    if (index <= currentRating) {
      return 100;
    }

    if (index - 1 < currentRating && index > currentRating) {
      return (currentRating % 1) * 100;
    }

    return 0;
  };

  return (
    <div className={`${styles.rating} ${readOnly && styles.readOnly}`}>
      {[...Array(maxRating)].map((_, index) => {
        index += 1;
        const fillPercentage = getStarFillPercentage(index);
        return (
          <span
            key={index}
            className={styles.starContainer}
            onClick={() => handleClick(index)}
            onMouseEnter={() => !readOnly && setHover(index)}
            onMouseLeave={() => !readOnly && setHover(null)}
          >
            <span
              className={styles.star}
              style={{ width: `${fillPercentage}%` }}
            >
              &#9733;
            </span>
            <span className={styles.starOutline}>&#9733;</span>
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
