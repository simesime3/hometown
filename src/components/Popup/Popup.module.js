// components/Popup/Popup.js

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function Popup({ map, latlng, content }) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (map && latlng && content) {
      popupRef.current = L.popup()
        .setLatLng(latlng)
        .setContent(content)
        .openOn(map);

      return () => {
        if (popupRef.current) {
          map.closePopup(popupRef.current);
          popupRef.current = null;
        }
      };
    }
  }, [map, latlng, content]);

  return null;
}