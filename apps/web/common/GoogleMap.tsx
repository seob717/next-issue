'use client';

import React, { useEffect, useState, type CSSProperties } from 'react';
import { APIProvider, Map, MapProps } from '@vis.gl/react-google-maps';

const MAX_LAT = (Math.atan(Math.sinh(Math.PI)) * 180) / Math.PI;

const DEFAULT_MAP_OPTIONS: MapProps = {
  noClear: true,
  disableDefaultUI: true,
  clickableIcons: false,
  gestureHandling: 'greedy',
  defaultZoom: 5,
  // 지도 뷰를 제외한 회색 영역으로 움직임을 방지
  restriction: {
    latLngBounds: {
      north: MAX_LAT,
      south: -MAX_LAT,
      west: -180,
      east: 180,
    },
    strictBounds: true,
  },
};

const DEFAULT_MAP_STYLE: CSSProperties = { width: '100%', height: '100%' };

const GoogleMap = () => {
  const [position, setPosition] = useState({ lat: 37.4815396, lng: 127.1238081 });

  useEffect(() => {
    const success: PositionCallback = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setPosition({
        lat: latitude,
        lng: longitude,
      });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <Map style={DEFAULT_MAP_STYLE} {...DEFAULT_MAP_OPTIONS} defaultCenter={position} />
    </APIProvider>
  );
};

export default GoogleMap;
