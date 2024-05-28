import React from "react";
import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
      className={styles.wave}
    ></div>
  );
};

export default LoadingSkeleton;
