import React, { useState } from 'react';
import styles from './Modal.module.css';
import Information from '../Information/Information'; // Informationコンポーネントをインポート

function Modal({ isOpen, onClose, data }) {
  const [showInformation, setShowInformation] = useState(false);
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // どのボタンが選ばれたかを管理

  // ダミーデータ（API呼び出しの代わり）
  const fetchCityDetails = async () => {
    if (!data.cityName) return;

    try {
      setLoading(true);

      // ダミーデータ
      const mockCityDetails = {
        prefectureName: data.prefectureName,
        name: data.cityName,
        description: "これはモックデータです。",
        additionalInfo: "追加情報はありません。追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません追加情報はありません",
        image: "/assets/images/image1.jpg"
      };

      setTimeout(() => {
        setCityDetails(mockCityDetails);
        setShowInformation(true);
        setLoading(false);
      }, 500); // 擬似的なロード時間
    } catch (error) {
      console.error("エラー発生:", error);
      setLoading(false);
    }
  };

  // 本番よう
  // const fetchCityDetails = async () => {
  //   console.log("Modal data:", data);
  //   if (!data.cityName) return;
  //   console.log("APIリクエスト送信:", `/api/municipality/${data.cityName}`);

  //   try {
  //     setLoading(true);
  //     const response = await fetch(`http://127.0.0.1:8000/api/municipality/${data.cityName}`);
  //     // const response = await fetch(`http://127.0.0.1:8000/api/municipality?city=${cityName}&prefecture=${prefectureName}`);
  //     const fetchedData = await response.json(); // Renamed from data to fetchedData

  //     if (!fetchedData.error) {
  //       setCityDetails(fetchedData); // Save the fetched data
  //       setShowInformation(true);
  //     }
  //   } catch (error) {
  //     console.error("エラー発生:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
          <h2>{data.title}</h2>
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
