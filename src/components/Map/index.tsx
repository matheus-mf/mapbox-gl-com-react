import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import { useMap } from '../../hooks/map';
import Marker from '../Marker';

import { Container } from './styles';

interface IViewport {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map: React.FC = () => {
  const { dataMap } = useMap();

  const { markerData, position, location } = dataMap;

  const [viewport, setViewport] = useState<IViewport>({
    latitude: location.lat,
    longitude: location.lng,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });

  return (
    <Container>
      <ReactMapGL
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(vp: IViewport) => setViewport(vp)}
        {...viewport}
      >
        {position && (
          <Marker latitude={position.latitude} longitude={position.longitude} />
        )}
        {markerData.map(data => (
          <Marker
            key={data.id}
            data={data}
            longitude={data.longitude}
            latitude={data.latitude}
          />
        ))}
      </ReactMapGL>
    </Container>
  );
};

export default Map;
