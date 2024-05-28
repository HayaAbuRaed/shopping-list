import React from "react";
import styles from "./styles.module.css";
import { faCartShopping, faDolly } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarLogo}>
        <FontAwesomeIcon icon={faDolly} />
        SimpleShopper
      </a>

      {/* <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="/" className={styles.navbarLink}>
            Home
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/about" className={styles.navbarLink}>
            About
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/contact" className={styles.navbarLink}>
            Contact
          </a>
        </li>
      </ul> */}

      <div className={styles.navbarIcons}>
        <a href="/" className={styles.navbarLink}>
          <FontAwesomeIcon icon={faHeart} />
        </a>

        <a href="/cart" className={styles.navbarLink}>
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
