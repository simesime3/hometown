'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import Modal from '../Modal/Modal';
import Popup from '../Popup/Popup';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapSearch from '../MapSearch/MapSearch';

export default function Map() {
  const mapRef = useRef(null);
  const geojsonLayerRef = useRef(null);
  const labelGroupRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [municipalities, setMunicipalities] = useState([]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [geojsonLayer, setGeojsonLayer] = useState(null);

  // モーダルを開く関数
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // マップの初期化とデータのロード
  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current) {
      const map = L.map('map', { scrollWheelZoom: true, attributionControl: false }).setView([35.6895, 139.6917], 5);
      mapRef.current = map;
      setIsMapLoaded(true); // マップがロードされたことを記録

      // タイルレイヤーを追加
      L.tileLayer('https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>, &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      // エラーなしタイル
      // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // }).addTo(map);
      

      geojsonLayerRef.current = L.geoJSON(null, {
        style: {
          fillColor: 'blue',
          fillOpacity: 0.1,
          color: 'black',
          weight: 1
        },
        onEachFeature: (feature, layer) => {
          layer.on('click', (event) => {
            const latlng = event.latlng;
            // クリックされたエリアを赤色に変更
            geojsonLayerRef.current.eachLayer((l) => {
              l.setStyle({ fillColor: 'blue', fillOpacity: 0.1 }); // 全部リセット
            });
            layer.setStyle({ fillColor: 'red', fillOpacity: 0.5 }); // クリックしたエリアを赤にする

            const prefectureName = feature.properties.N03_001; // 都道府県名
            const cityName = feature.properties.N03_004; // 市区町村名

            const popupContent = `
              <div>
                <h2>${prefectureName} ${cityName}</h2>
              </div>
            `;
            setPopupData({ latlng, content: popupContent });

            openModal({
              prefectureName: prefectureName,
              cityName: cityName, 
              button1: 'この自治体のおうえんレポートを見る',
              button2: 'この自治体の返礼品を探す',
              button3: 'この自治体への旅行プランを探す',
              button4: 'この自治体の名所・名産品を見る',
              supportCount: `おうえん登録数: ${Math.floor(Math.random() * 200)}`,
              supportButton: '♡',
            });
          });
        }
      }).addTo(map);
      setGeojsonLayer(geojsonLayerRef.current); 

      labelGroupRef.current = L.layerGroup().addTo(map);
      map.removeLayer(labelGroupRef.current);

      function updateLabels() {
        console.log("Updating labels...");
      }

      // GeoJSONファイルをロードして、地図に追加
      fetch('/assets/data/japan-municipalities.geojson')
        .then(response => {
          if (!response.ok) throw new Error('GeoJSONの読み込みに失敗しました');
          return response.json();
        })
        .then(data => {
          geojsonLayerRef.current.addData(data);
          updateLabels();

          const extractedMunicipalities = data.features.map(feature => {
            const prefectureName = feature.properties.N03_001; // 都道府県名
            const cityName = feature.properties.N03_004; // 市区町村名
            let coords = feature.geometry.coordinates;

            // Polygon 形式の場合の処理
            if (Array.isArray(coords) && Array.isArray(coords[0])) {
              coords = coords[0][0];
            }

            return {
              name: cityName,
              fullName: `${prefectureName} ${cityName}`.trim(),
              coords: Array.isArray(coords) ? [coords[1], coords[0]] : undefined
            };
          });

          setMunicipalities(extractedMunicipalities);
        })
        .catch(error => console.error('Error:', error));

      const zoomThreshold = 8;
      map.on('zoomend', () => {
        const zoom = map.getZoom();
        if (zoom > zoomThreshold) {
          map.addLayer(labelGroupRef.current);
          updateLabelStyles(zoom);
        } else {
          map.removeLayer(labelGroupRef.current);
        }
      });

      function updateLabelStyles(zoom) {
        labelGroupRef.current.eachLayer(marker => {
          if (marker._icon) {
            marker._icon.style.fontSize = `${12 + zoom}px`;
          }
        });
      }
    }
  }, []);

  // 検索処理を定義
  const handleSearch = (searchTerm) => {
    console.log('検索ワード:', searchTerm);

    if (!mapRef.current || !geojsonLayerRef.current) {
      console.error('Map または GeoJSON データがまだロードされていません');
      return;
    }

    let found = false;
    geojsonLayerRef.current.eachLayer((layer) => {
      const { N03_001: prefectureName, N03_004: cityName } = layer.feature.properties;
      const fullName = `${prefectureName} ${cityName}`.trim();

      if (fullName.includes(searchTerm)) {
        const bounds = layer.getBounds();
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
        found = true;
        return;
      }
    });
  };

  // popupData の変更を監視してログを出力
  useEffect(() => {
    if (popupData) {
      console.log("Updated popupData:", popupData);
    }
  }, [popupData]);

  return (
    <div className={styles.mapContainer}>
      <div id="map" className={styles.map}></div>
 {isMapLoaded && geojsonLayer && <MapSearch geojsonLayer={geojsonLayer} map={mapRef.current} onSearch={handleSearch} />}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalContent} />
      {popupData && <Popup map={mapRef.current} {...popupData} />}
    </div>
  );
}
