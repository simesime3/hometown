import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";  // マイページアイコン

const Header = ({ onHeightChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);  // refを使ってheaderの高さを取得

  // ヘッダーの高さを親コンポーネントに伝える
  useEffect(() => {
    if (headerRef.current && onHeightChange) {
      onHeightChange(headerRef.current.offsetHeight); // 親に高さを通知
    }
  }, [onHeightChange]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.leftSection}>
        {/* マイページアイコン */}
        <Link href="/mypage" className={styles.mypageIcon}>
          <FaUserCircle size={32} />
        </Link>
        {/* ロゴ */}
        <img 
          src="/assets/images/logo.png"  // 画像ファイルのパス
          alt="My Travel App Logo"
          className={styles.logo} // スタイルを適用
        />
      </div>

      {/* ハンバーガーメニュー */}
      <button 
        className={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* ナビゲーションメニュー */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
