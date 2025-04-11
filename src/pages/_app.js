import '../styles/globals.css';
import "../styles/App.css";  // グローバルCSSのインポート
import Header from "../components/Header/Header";  // ヘッダーコンポーネントのインポート

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />  {/* すべてのページにヘッダーを適用 */}

        <Component {...pageProps} />

    </>
  );
}

export default MyApp;