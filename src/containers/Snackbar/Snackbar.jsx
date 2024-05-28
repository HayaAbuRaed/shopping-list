import { useEffect } from "react";
import styles from "./Snackbar.module.css";

const Snackbar = ({ message, open, duration=3000, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  return (
    <div className={`${styles.snackbar} ${!open ? styles.hide : ""}`}>
      {message}
    </div>
  );
};

export default Snackbar;
