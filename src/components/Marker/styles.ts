import styled from 'styled-components';

import { Marker } from 'react-map-gl';

interface ICircleMarker {
  radius: number;
  color: string;
}

export const Container = styled(Marker)`
  img {
    width: 20px;
    height: 20px;
  }
`;

export const CircleMarker = styled.div<ICircleMarker>`
  position: absolute;
  top: -${props => props.radius}px;
  right: -${props => props.radius}px;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;

  background-color: ${props => props.color};
  opacity: 0.2;
  border-radius: 50%;
`;
