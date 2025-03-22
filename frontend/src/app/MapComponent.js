// MapComponent.js
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicMapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const DynamicGeoJSON = dynamic(() => import("react-leaflet").then((mod) => mod.GeoJSON), { ssr: false });
const DynamicPopup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

export default function MapComponent({ onSelectCity }) {
  const [geoData, setGeoData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityDetails, setCityDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randomImage, setRandomImage] = useState(null); // ⭐ ランダム画像追加

  const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];

  useEffect(() => {
    fetch("/japan-municipalities.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  const handleFeatureClick = (feature, layer) => {
    layer.on("click", () => {
      const cityName = feature.properties.N03_004;
      console.log("クリックした市区町村:", cityName);
      setSelectedCity(cityName);
      setShowDetails(false);
      setCityDetails(null);
      setLoading(false);
    });
  };

  const fetchCityDetails = async () => {
    if (!selectedCity) return;
    console.log("APIリクエスト送信:", `/api/municipality/${selectedCity}`);

    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:8000/api/municipality/${selectedCity}`);
      const data = await response.json();
      console.log("取得したデータ:", data);

      if (!data.error) {
        setCityDetails(data);
        setShowDetails(true);
        // ⭐ ここで画像をランダムに設定
        const randIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randIndex]);
      }
    } catch (error) {
      console.error("エラー発生:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <div className="animate-spin rounded-full h-12 w-12 border-6 border-blue-700 border-t-transparent"></div>
        </div>
      )}

      <DynamicMapContainer
        key="leaflet-map"
        center={[36.3418, 140.4468]}
        zoom={10}
        style={{ height: "100vh", width: "100vw" }}
      >
        <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geoData && <DynamicGeoJSON data={geoData} onEachFeature={handleFeatureClick} />}

        {selectedCity && (
          <DynamicPopup position={[36.3418, 139.9]}>
            <div className="text-center mb-3">
              <h3 className="text-lg font-semibold">{selectedCity} の情報</h3>
              <p>「消滅可能性」自治体</p>
              <div className="space-y-2">
                <button onClick={() => alert("自治体レポートを開く")} className="border border-black bg-sky-200 text-black px-3 py-1 rounded w-full">自治体からのレポートを見る</button>
                <button onClick={() => alert("返礼品を探す")} className="border border-black bg-sky-200 text-black px-3 py-1 rounded w-full">この自治体の返礼品を探す</button>
                <button onClick={() => alert("旅行プランを探す")} className="border border-black bg-sky-200 text-black px-3 py-1 rounded w-full">この自治体への旅行プランを探す</button>
                <button onClick={fetchCityDetails} className="border border-black bg-sky-200 text-black px-3 py-1 rounded w-full" disabled={loading}>
                  {loading ? "読み込み中..." : "この自治体の名所・名産品を見る"}
                </button>
              </div>
              <p className="mt-3 text-sm text-black text-right cursor-pointer" onClick={() => setSaved(!saved)}>
                救いたい登録：<span className="text-red-500 text-lg ml-1">{saved ? "♥" : "♡"}</span>
              </p>
            </div>
          </DynamicPopup>
        )}
      </DynamicMapContainer>

      <div className={`fixed top-0 right-0 h-full w-full md:w-2/5 bg-white shadow-lg p-4 transition-transform ${showDetails ? "translate-x-0" : "translate-x-full"}`} style={{ transition: "transform 0.3s ease-in-out", zIndex: 1000 }}>
        {showDetails && cityDetails && (
          <div className="text-center overflow-y-auto max-h-full">
            <h3 className="text-2xl font-bold mb-4">{selectedCity} の名所・名産品</h3>
            <p className="mb-4">{cityDetails.description}</p>
            <ul className="space-y-4 mt-4">
              {cityDetails.highlights.map((item, index) => (
                <li key={index} className="text-center">
                  <div className="font-semibold">{item.name}</div>
                  {item.description && (
                    <div
                      className="text-sm text-center"
                      dangerouslySetInnerHTML={{
                        __html: item.description.replace(/\r?\n/g, "<br />"),
                      }}
                    ></div>
                  )}
                </li>
              ))}
            </ul>

            {/* ⭐ ランダム画像表示部分 */}
            {randomImage && (
              <img
                src={randomImage}
                alt="地域のイメージ画像"
                className="mx-auto mt-6 rounded-lg shadow-md max-w-xs"
              />
            )}

            <button className="mt-6 bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowDetails(false)}>
              閉じる
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
