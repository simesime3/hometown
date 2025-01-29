frontend/
├── src/
│   ├── pages/
│   │   ├── _app.js              ← グローバルCSSをインポート
│   │   └── index.js             ← 他のページコンポーネント
│   ├── components/              ← コンポーネント
│   ├── styles/                  ← CSSファイル
│   │   └── App.css              ← グローバルCSS（ここでインポートされる）
│   └── utils/                   ← ユーティリティ
├── package.json
├── next.config.js