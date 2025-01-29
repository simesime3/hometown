import React from "react";
import { Button } from "react-bootstrap"; // react-bootstrapのButtonをインポート
import styles from './Footer.module.css'; // Footer.module.cssをインポート

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <Button className={styles['footer-button']} variant="success">
        次へ進む
      </Button>
    </footer>
  );
};

export default Footer;
