import React, { useState } from 'react';

export default function MapSearch({ onSearch, geojsonLayer, map }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // 市区町村を検索して移動する関数
  const handleSearch = () => {
    const query = searchTerm.trim(); // 検索語をトリミング

    if (query === '') {
      return; // 空白で検索しない
    }

    // 親コンポーネントに検索ワードを渡す
    if (onSearch) {
      onSearch(query);
    }

    if (!geojsonLayer || !map) {
      console.log("geojsonLayer:", geojsonLayer);
      console.log("map:", map);
      console.log('geojsonLayer または map が正しく渡されていません！');
      return;
    }

    let found = false;
    geojsonLayer.eachLayer((layer) => {
      const { N03_001: prefectureName, N03_004: cityName } = layer.feature.properties;
      const fullName = `${prefectureName} ${cityName}`.trim();

      // console.log(`Checking layer: ${fullName}`); // デバッグ用

      // 完全一致で検索して移動
      if (fullName === query) {
        const bounds = layer.getBounds();
        map.fitBounds(bounds, { padding: [50, 50] });
        found = true;
        return;
      }
      
    });

    // if (!found) {
    //   alert('該当する市区町村が見つかりませんでした');
    // }

    setSuggestions([]); // 検索後にサジェストをクリア
  };

  // 入力が変わったらサジェストを更新
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (!geojsonLayer) return;

    console.log(`Input changed: ${input}`); // 入力内容を表示

    const matched = [];
    geojsonLayer.eachLayer((layer) => {
      const { N03_001: prefectureName, N03_004: cityName } = layer.feature.properties;
      const fullName = `${prefectureName} ${cityName}`.trim();

      // console.log(`Layer name: ${fullName}`); // デバッグ用

      // 入力に部分一致する市区町村を候補として表示
      if (fullName.toLowerCase().includes(input.toLowerCase())) {
        matched.push(fullName);
      }
    });

    console.log('Matched suggestions:', matched); // サジェストされた項目を表示
    setSuggestions(matched); // 入力ごとにサジェストを更新
  };

  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000, background: 'white', padding: '10px', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="市区町村を検索"
        value={searchTerm}
        onChange={handleInputChange}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     handleSearch(); // Enterキーで検索実行
        //   }
        // }}
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={handleSearch}>検索</button>

      {/* サジェスト表示 */}
      {suggestions.length > 0 && (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '5px',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '5px',
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchTerm(suggestion); // サジェストクリックで入力ボックスにセット
                setSuggestions([]); // サジェストリストをクリア
                handleSearch(); // 選択された市区町村に移動
              }}
              style={{
                padding: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd'
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
