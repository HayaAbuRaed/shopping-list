import React, { useState } from "react";
import styles from "./styles.module.css";
import Snackbar from "../Snackbar";

const CheckoutDialog = ({ onClose }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData({ title: "", content: "" });
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSnackbarOpen(true);
    setTimeout(() => handleClose(), 4000);
  };

  const isDisabled = !formData.name || !formData.email;

  return (
    <>
      <div className={styles.dialogOverlay}>
        <div className={styles.dialog}>
          <h2>Checkout</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.flexColumn}>
              <div className={styles.filedContainer}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  className={styles.field}
                  type="text"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>

              <div className={styles.filedContainer}>
                <label htmlFor="email">email</label>
                <input
                  name="email"
                  className={styles.field}
                  type="email"
                  value={formData.email}
                  placeholder="E-mail"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.dialogActions}>
              <button
                className={`${styles.button} ${styles.confirmButton} ${
                  isDisabled && styles.disabled
                }`}
              >
                Checkout
              </button>
              <button
                onClick={handleClose}
                className={`${styles.button} ${styles.cancelButton}`}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Snackbar
        message={`✅ Checkout is successful, thank you ${formData.name}!`}
        open={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
      />
    </>
  );
};

export default CheckoutDialog;
