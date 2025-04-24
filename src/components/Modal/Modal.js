import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import Information from '../Information/Information';

function Modal({ isOpen, onClose, data }) {
  const [showInformation, setShowInformation] = useState(false);
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchCityDetails = async () => {
    setLoading(true);
    try {
      if (selectedButton === 'famous') {
        const prefecture = data.prefectureName || '';
        const city = data.cityName || '';

        const res = await fetch(
          `${API_BASE}/famous?prefecture=${encodeURIComponent(prefecture)}&city=${encodeURIComponent(city)}`
        );

        const result = await res.json();
        console.log("✅ API結果:", result);

        setCityDetails({
          name: `${prefecture}${city}`,
          description: result.description,
          specialties: result.specialties,
          sightseeing: result.sightseeing,
          image: result.image
        });

        setShowInformation(true);
        setLoading(false);
        return;
      }

      if (selectedButton === 'report') {
        const municipalityId = data.cityId;

        const res = await fetch(`${API_BASE}/reports?municipality_id=${municipalityId}`);
        const reports = await res.json();

        setCityDetails({
          name: `${data.prefectureName}${data.cityName}`,
          reports: reports,
        });

        setShowInformation(true);
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE}/municipality/${data.cityId}`);
      const json = await res.json();
      setCityDetails(json);
      setShowInformation(true);
    } catch (err) {
      console.error('データ取得エラー:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedButton) {
      fetchCityDetails();
    }
  }, [selectedButton]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
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

          <button className={styles['modal-button']} onClick={() => handleButtonClick('famous')}>
            {loading ? "読み込み中..." : data.button4}
          </button>

          <button className={styles['modal-button']} onClick={() => handleButtonClick('report')}>
            {loading ? "読み込み中..." : data.button1}
          </button>

          <button
            className={styles['modal-button']}
            onClick={() => {
              const keyword = encodeURIComponent(`${data.prefectureName}${data.cityName}`);
              const url = `https://furunavi.jp/Product/Search?keyword=${keyword}`;
              window.open(url, '_blank');
            }}
          >
            {data.button2}
          </button>

          <button
            className={styles['modal-button']}
            onClick={() => {
              window.open('https://tp.furunavi.jp/', '_blank');
            }}
          >
            {data.button3}
          </button>
        </div>

        <div className={styles['modal-footer']}>
          <p>{data.supportCount}</p>
          <button className={styles['modal-support-button']}>
            {data.supportButton}
          </button>
        </div>
      </div>

      {showInformation && (
        <Information
          cityDetails={cityDetails}
          onClose={handleCloseInformation}
          selectedButton={selectedButton}
        />
      )}
    </div>
  );
}

export default Modal;
