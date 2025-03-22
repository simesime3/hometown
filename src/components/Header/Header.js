import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";  // マイページアイコン

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {/* マイページアイコン */}
        <Link href="/mypage" className={styles.mypageIcon}>
          <FaUserCircle size={32} />
        </Link>
        {/* ロゴ */}
        <img 
          src="/assets/images/logo.png"  // 画像ファイルのパス
          // alt="My Travel App Logo"
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
