import React, { useState } from 'react';
import Header from '../Header/Header'; // Headerコンポーネントをインポート
import styles from './Information.module.css';
import Report from '../Report/Report';
import ReturnGift from '../ReturnGift/ReturnGift'; 
import Trip from '../Trip/Trip';
import Famous from '../Famous/Famous';

function Information({ cityDetails, onClose, selectedButton }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  // ヘッダーから高さを取得する関数
  const handleHeaderHeightChange = (height) => {
    setHeaderHeight(height); // 親コンポーネントで高さを管理
    console.log(cityDetails);
  };

  // cityDetailsが渡されていない場合、nullを返す
  if (!cityDetails) return null;

  // 選択されたボタンに基づいてコンテンツをレンダリング
  const renderContent = () => {
    switch (selectedButton) {
      case 'report':
        return <Report cityDetails={cityDetails} />;
      case 'returngift': 
        return <ReturnGift cityDetails={cityDetails} />; 
      case 'trip':
        return <Trip cityDetails={cityDetails} />;
      case 'famous':
        return <Famous cityDetails={cityDetails} />;
      default:
        return <p>Please select a valid option.</p>; // デフォルトで無効な選択を表示
    }
  };

  return (
    <div className={styles['information-container']}>
      {/* オーバーレイをクリックするとモーダルが閉じる */}
      <div className={styles['information-overlay']} onClick={onClose}>
      </div>
      <div
        className={styles['information-content']}
        style={{ height: `calc(100vh - ${headerHeight}px)` }} // ヘッダーの高さを引いてコンテンツの高さを調整
      >
        {/* 閉じるボタンと市町村名を横並びに配置 */}
        <div className={styles['information-header']}>
          <button className={styles['information-close']} onClick={onClose}>×</button>
          <div className={styles['city-name']}>{cityDetails.prefectureName} {cityDetails.name}</div>
        </div>
        
        {/* Headerコンポーネントに高さ変更関数を渡す */}
        <Header onHeightChange={handleHeaderHeightChange} />
        <div className={styles['information-body']}>
          {/* 選択されたボタンに基づいてコンテンツを表示 */}
          {renderContent()}

          {/* 画像があれば表示 */}
          {cityDetails.image && <img src={cityDetails.image} alt={cityDetails.name} />}
        </div>
      </div>
    </div>
  );
}

export default Information;
