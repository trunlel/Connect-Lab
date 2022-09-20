import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.sectionInfo}>
        <h2 className={styles.sectionInfoTitle}>inHouse</h2>
        <p className={styles.sectionInfoDescription}>
          ©{new Date().getFullYear()} - inHouse.
        </p>
        <p className={styles.sectionInfoDescription}>
          Todos os direitos reservados.
        </p>
      </section>

      <section className={styles.sectionSocialMidia}>
        <a href="https://facebook.com">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/">
          <FiTwitter />
        </a>
      </section>
    </footer>
  );
};
