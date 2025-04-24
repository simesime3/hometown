'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import Modal from '../Modal/Modal';
import Popup from '../Popup/Popup';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapSearch from '../MapSearch/MapSearch';
import { levelMap } from '../data/levelMap_with_nulls';

// ✅ 追加: レベル→確率表現変換関数
function getExtinctionProbability(level) {
  switch (level) {
    case 1: return '0％';
    case 2: return '0～20％';
    case 3: return '20～40％';
    case 4: return '40～60％';
    case 5: return '60～80％';
    case 6: return '80％以上';
    default: return '未設定';
  }
}

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

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function getColorByLevel(level) {
    switch (level) {
      case 1: return '#00BB00';
      case 2: return '#E6E6FA';
      case 3: return '#6495ED';
      case 4: return '#4169E1';
      case 5: return '#0000CD';
      case 6: return '#000022';
      default: return '#cccccc';
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current) {
      const map = L.map('map', { scrollWheelZoom: true, attributionControl: false }).setView([35.6895, 139.6917], 5);
      mapRef.current = map;
      setIsMapLoaded(true);

      L.tileLayer('https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>, &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      geojsonLayerRef.current = L.geoJSON(null).addTo(map);
      setGeojsonLayer(geojsonLayerRef.current);

      labelGroupRef.current = L.layerGroup().addTo(map);
      map.removeLayer(labelGroupRef.current);

      fetch('/assets/data/japan-municipalities.geojson')
        .then(res => {
          if (!res.ok) throw new Error('GeoJSONの読み込みに失敗しました');
          return res.json();
        })
        .then(geoJsonData => {
          geojsonLayerRef.current = L.geoJSON(geoJsonData, {
            style: feature => {
              const cityId = feature.properties.N03_007?.toString().padStart(5, '0');
              const level = levelMap[cityId];
              return {
                fillColor: getColorByLevel(level),
                fillOpacity: 0.7,
                color: 'black',
                weight: 1
              };
            },
            onEachFeature: (feature, layer) => {
              layer.on('click', (event) => {
                const latlng = event.latlng;

                geojsonLayerRef.current.eachLayer((l) => {
                  const cityId = l.feature.properties.N03_007?.toString().padStart(5, '0');
                  const level = levelMap[cityId];
                  l.setStyle({
                    fillColor: getColorByLevel(level),
                    fillOpacity: 0.7,
                    color: 'black',
                    weight: 1
                  });
                });

                layer.setStyle({ fillColor: 'red', fillOpacity: 0.5 });

                const prefectureName = feature.properties.N03_001;
                const cityName = feature.properties.N03_004;
                const subCityName = feature.properties.N03_003 || '';
                const cityId = feature.properties.N03_007?.toString().padStart(5, '0');
                const level = levelMap[cityId];

                // ✅ 修正: 表示を「2050年の消滅可能性: ～％」に変更
                setPopupData({
                  latlng,
                  content: `
                    <div>
                      <h2>${prefectureName}${cityName}</h2>
                      <p>2050年の消滅可能性: ${getExtinctionProbability(level)}</p>
                    </div>
                  `
                });

                openModal({
                  prefectureName,
                  cityName,
                  cityId,
                  button1: 'この自治体のおうえんレポートを見る',
                  button2: 'この自治体の返礼品を探す',
                  button3: 'この自治体への旅行プランを探す',
                  button4: 'この自治体の名産品・観光地を見る',
                  extinction: level ?? '未設定',
                });
              });
            }
          }).addTo(map);

          setGeojsonLayer(geojsonLayerRef.current);

          const extractedMunicipalities = geoJsonData.features.map(feature => {
            const prefectureName = feature.properties.N03_001;
            const cityName = feature.properties.N03_004;
            let coords = feature.geometry.coordinates;

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
        .catch(error => console.error('GeoJSON 読み込み失敗:', error));

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

  const handleSearch = (searchTerm) => {
    if (!mapRef.current || !geojsonLayerRef.current) return;

    let found = false;
    geojsonLayerRef.current.eachLayer((layer) => {
      const { N03_001: prefectureName, N03_004: cityName } = layer.feature.properties;
      const fullName = `${prefectureName}${cityName}`.trim();

      if (fullName.includes(searchTerm)) {
        const bounds = layer.getBounds();
        mapRef.current.invalidateSize();
        mapRef.current.fitBounds(bounds, {
          paddingTopLeft: [20, -250],
          paddingBottomRight: [20, 20],
          maxZoom: 10,
        });
        setTimeout(() => {
          layer.fire('click');
        }, 500);
        found = true;
      }
    });

    if (!found) {
      console.warn('一致する自治体が見つかりませんでした');
    }
  };

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
