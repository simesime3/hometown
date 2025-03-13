'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import Modal from '../Modal/Modal';
import Popup from '../Popup/Popup';

export default function Map() {
  const mapRef = useRef(null);
  const geojsonLayerRef = useRef(null);
  const labelGroupRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [popupData, setPopupData] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current) {
      const map = L.map('map', { scrollWheelZoom: true }).setView([35.6895, 139.6917], 5);
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>, &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      geojsonLayerRef.current = L.geoJSON(null, {
        style: {
          fillColor: 'blue',
          fillOpacity: 0.1,
          color: 'black',
          weight: 1
        },
        onEachFeature: (feature, layer) => {
          // layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.5 }));
          // layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.1 }));
          layer.on('click', (event) => {
            const  latlng  = event.latlng;
              // クリックされたエリアを青色に変更
              geojsonLayerRef.current.eachLayer((l) => {
                l.setStyle({ fillColor: 'blue', fillOpacity: 0.1 }); // 全部リセット
              });

              layer.setStyle({ fillColor: 'red', fillOpacity: 0.5 }); // クリックしたエリアを赤にする
            
            console.log("click");
            const popupContent = `
              <div>
                <h2>${feature.properties.laa}</h2>
                <p>laa: ${feature.properties.laa || '情報なし'}</p>
              </div>
            `;
            setPopupData({ latlng, content: popupContent });

            openModal({
              title: feature.properties.laa,
              button1: 'この自治体のおうえんレポートを見る',
              button2: 'この自治体の返礼品を探す',
              button3: 'この自治体への旅行プランを探す',
              button4: 'この自治体の名所・名産品を見る',
              supportCount: `おうえん登録数: ${Math.floor(Math.random() * 200)}`,
              supportButton: '♡',
              laa: feature.properties.laa || '情報なし'
            });
          });
        }
      }).addTo(map);

      labelGroupRef.current = L.layerGroup().addTo(map);
      map.removeLayer(labelGroupRef.current);

      function updateLabels() {
        console.log("Updating labels...");
        // ラベルの更新処理を記述
      }

      fetch('/assets/data/geo.json')
        .then(response => {
          if (!response.ok) throw new Error('GeoJSONの読み込みに失敗しました');
          return response.json();
        })
        .then(data => {
          geojsonLayerRef.current.addData(data);
          updateLabels(); 
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

  // popupData の変更を監視してログを出力する
  useEffect(() => {
    if (popupData) {
      console.log("Updated popupData:", popupData); // ここで正しい値が表示される
    }
  }, [popupData]);
  

  return (
    <div className={styles.mapContainer}>
      <div id="map" className={styles.map}></div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalContent} />
      {popupData && <Popup map={mapRef.current} {...popupData} />}
    </div>
  );
}
