// src/pages/_app.js
import '../styles/App.css';  // グローバルCSSのインポート

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
