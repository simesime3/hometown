import { useEffect } from 'react';
import L from 'leaflet';

const Popup = ({ map, latlng, content }) => {
  useEffect(() => {

    console.log("popupData received:", { latlng, map }); // popupDataが正しく受け取られているか確認
    if (!map || !latlng) return; // mapとlatlngがない場合は何もしない

    console.log("popupData received:", { latlng, content }); // popupDataが正しく受け取られているか確認


    // ポップアップの作成
    const popup = L.popup()
      .setLatLng(latlng) // latlngを設定
      .setContent(content) // コンテンツを設定
      .openOn(map); // mapに表示

    // クリーンアップ：コンポーネントがアンマウントされた際にポップアップを閉じる
    return () => {
      console.log("Cleaning up popup");
      map.closePopup(popup); // 既存のポップアップを閉じる
    };
  }, [map, latlng, content]); // map, latlng, contentが変更される度に再実行

  return null; // このコンポーネント自体は何も表示しない
};

export default Popup;
