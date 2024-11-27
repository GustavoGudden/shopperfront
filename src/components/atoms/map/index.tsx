import { Coordinates } from '@/types/Coordenate';
import { Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';

interface IMapRc {
  onclickEvent: (ev: any) => void;
  marks?: Coordinates[];
  initialLocation: Coordinates;
}

const MapRc = ({ initialLocation, onclickEvent, marks }: IMapRc) => {
  return (
    <Map defaultZoom={20} onClick={(ev: any) => onclickEvent(ev)} defaultCenter={initialLocation}>
      {marks && marks?.length != 0 && marks.map((item, index) => <Marker position={{ lat: item.lat, lng: item.lng }} title="Marcador" key={index} />)}
    </Map>
  );
};

export default MapRc;
