import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import Information from '../Information/Information'; // Informationコンポーネントをインポート

function Modal({ isOpen, onClose, data }) {
  const [showInformation, setShowInformation] = useState(false);
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // どのボタンが選ばれたかを管理

  // ダミーデータ（API呼び出しの代わり）
  // const fetchCityDetails = async () => {
  //   if (!data.cityName) return;

  //   try {
  //     setLoading(true);
  //     console.log("data:",data);

  //     // ダミーデータ
  //     const mockCityDetails = {
  //       prefectureName: data.prefectureName,
  //       name: data.cityName,
  //       description: "これはモックデータです。",
  //       additionalInfo: "追加情報はありません。追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません",
  //       image: "/assets/images/image1.jpg"
  //     };

  //     setTimeout(() => {
  //       setCityDetails(mockCityDetails);
  //       setShowInformation(true);
  //       setLoading(false);
  //     }, 500); // 擬似的なロード時間
  //   } catch (error) {
  //     console.error("エラー発生:", error);
  //     setLoading(false);
  //   }
  // };

  // 本番用
  const fetchCityDetails = async () => {
    console.log("Modal data:", data);
    if (!data.cityId) return;
    console.log("APIリクエスト送信:", `http://localhost:5000/api/municipality/${data.cityId}`);
  
    try {
      setLoading(true);  // ローディング状態を設定
      const res = await fetch(`http://localhost:5000/api/municipality/${data.cityId}`);
      if (!res.ok) {
        const text = await res.text(); // エラー内容を確認
        console.error("エラーHTML:", text);
        throw new Error(`APIリクエスト失敗: ${res.status}`);
      }
  
      const cityDetails = await res.json();  // レスポンスをJSONに変換
      console.log("取得した市町村の詳細:", cityDetails);

      setTimeout(() => {
        setCityDetails(cityDetails);
        setShowInformation(true);
        setLoading(false);
      }, 500); // 擬似的なロード時間
    } catch (error) {
      console.error("エラー発生:", error);
      setLoading(false);
    }
  };

  // ボタンがクリックされた時にselectedButtonを更新
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // ボタン名をセット
    fetchCityDetails(); // クリックしたら情報を取得
  };

  const handleCloseInformation = () => {
    setShowInformation(false);
    setCityDetails(null);
  };

  if (!isOpen || !data) return null;

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles['modal-content']}>
        <button className={styles['modal-close']} onClick={onClose}>×</button>
        <div className={styles['modal-header']}>
          <h2>{data.prefectureName} {data.cityName}</h2>
        </div>
        <div className={styles['modal-body']}>
          <button className={styles['modal-button']} onClick={() => handleButtonClick('report')}>{data.button1}</button>
          <button className={styles['modal-button']} onClick={() => handleButtonClick('returngift')}>{data.button2}</button>
          <button className={styles['modal-button']} onClick={() => handleButtonClick('trip')}>{data.button3}</button>
          <button className={styles['modal-button']} onClick={() => handleButtonClick('famous')}>
            {loading ? "読み込み中..." : data.button4}
          </button>
        </div>
        <div className={styles['modal-footer']}>
          <p>{data.supportCount}</p>
          <button className={styles['modal-support-button']}>{data.supportButton}</button>
        </div>
      </div>

      {showInformation && <Information cityDetails={cityDetails} onClose={handleCloseInformation} selectedButton={selectedButton} />}
    </div>
  );
}

export default Modal;
