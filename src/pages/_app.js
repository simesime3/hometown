import '../styles/globals.css';
import "../styles/App.css";  // グローバルCSSのインポート
import Header from "../components/Header/Header";  // ヘッダーコンポーネントのインポート

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />  {/* すべてのページにヘッダーを適用 */}
      <main style={{ paddingTop: "60px" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;