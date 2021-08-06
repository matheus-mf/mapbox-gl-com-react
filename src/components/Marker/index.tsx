import React from 'react';

import mapPin from '../../assets/pin.svg';
import { IMarkerData } from '../../hooks/map';

import { Container, CircleMarker } from './styles';

interface IMarker {
  longitude: number;
  latitude: number;
  data?: IMarkerData;
}

const Marker: React.FC<IMarker> = ({ longitude, latitude, data }) => {
  return (
    <Container longitude={longitude} latitude={latitude}>
      {data ? (
        <CircleMarker radius={data.radius} color={data.color} />
      ) : (
        <img src={mapPin} alt="Pin" width={20} height={20} />
      )}
    </Container>
  );
};

export default Marker;
