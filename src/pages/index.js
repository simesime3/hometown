import dynamic from 'next/dynamic';
import styles from './index.module.css'; // スタイルを追加

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* ヘッダーの内容 */}
        <h1>Population Map</h1>
      </header>
      <main className={styles.main}>
        <Map />
      </main>
    </div>
  );
}