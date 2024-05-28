import React from "react";
import LoadingSkeleton from "../../../containers/LoadingSkeleton";
import styles from "./ProductsList.module.css";

const ListLoadingSkeleton = () => {
  return (
    <div className={styles.list}>
      {Array.from({ length: 10 }).map((_, index) => (
        <LoadingSkeleton
          key={index}
          width="100%"
          height="300px"
          borderRadius="1rem"
        />
      ))}
    </div>
  );
};

export default ListLoadingSkeleton;
