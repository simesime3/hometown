project-name/
├── public/
│   ├── index.html      // Webページの土台となるHTMLファイル
│   ├── favicon.ico     // Webサイトのアイコン
│   └── assets/         // 静的アセット（画像、データ）を格納
│       ├── images/     // 画像ファイルを格納
│       └── data/       // データファイルを格納
│           └── geo.json // 地図データ
│           └── jp.svg   // 地図タイル画像
├── src/
│   ├── components/     // 再利用可能なUIコンポーネントを格納
│   │   ├── AAttraction/
│   │   │   ├── Attraction.js            // 名所や名物品表示コンポーネント
│   │   │   └── Attraction.module.css    // 名所や名物品表示コンポーネントのスタイル
│   │   ├── Map/
│   │   │   ├── Map.js            // 地図コンポーネント
│   │   │   └── Map.module.css    // 地図コンポーネントのスタイル
│   │   ├── Modal/
│   │   │   ├── Modal.js          // モーダルコンポーネント
│   │   │   └── Modal.module.css  // モーダルコンポーネントのスタイル
│   │   ├── Popup/
│   │   │   ├── Popup.js          // ポップアップコンポーネント
│   │   │   └── Popup.module.css  // ポップアップコンポーネントのスタイル
│   │   └── ...                   // その他のコンポーネント
│   ├── pages/        // ページコンポーネントを格納（URL、ルーティングされるページ）
│   │   ├── index.js            // ホームページのコンポーネント
│   │   ├── about.js            // Aboutページのコンポーネント
│   │   ├── contact.js          // お問い合わせページのコンポーネント
│   │   └── product/
│   │       └── [id].js        // 製品詳細ページのコンポーネント（動的ルーティング）
│   ├── utils/        // ユーティリティ関数を格納
│   │   └── api.js            // API通信を行う関数
│   ├── styles/       // グローバルスタイルを格納
│   │   └── globals.css        // グローバルCSS
│   ├── App.js        // ルートコンポーネント
│   └── index.js      // アプリケーションのエントリーポイント
├── package.json      // npmのパッケージ設定ファイル
├── package-lock.json // npmの依存関係をロックするファイル
├── next.config.js   // Next.jsの設定ファイル（Next.jsを使用する場合）
└── README.md         // プロジェクトの説明

・MAPの引用元
https://www.gsi.go.jp/kankyochiri/gm_japan_e.html
 polbnda_jpn.shp

・MAP可視化ツール
geojson.io（手軽に可視化）
https://geojson.io/#map=2/0/20
Mapshaper（簡略化や編集が可能）
https://mapshaper.org/

      fetch('/geo.json')
      geo_json = '../../assets/data/geo.json'

・日本地図
https://simplemaps.com/gis/country/jp

・道具
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri'
}).addTo(map);