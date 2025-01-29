import React from "react";
import { Button } from "react-bootstrap"; // react-bootstrapのButtonをインポート
import styles from './Header.module.css'; // Header.module.cssをインポート

const Header = () => {
  return (
    <header className={styles['header-container']}>
      <h1 className={styles['header-title']}>ヘッダー</h1>
      <Button variant="light" className={styles['header-button']}>ボタン</Button>
    </header>
  );
};

export default Header;
