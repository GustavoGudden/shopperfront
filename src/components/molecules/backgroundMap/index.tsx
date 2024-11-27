'use client';

import React, { useEffect } from 'react';
import { AdvancedMarker, Map, MapControl, ControlPosition, AdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { MapHandler } from '../mapHandler';

interface IBackGroundMap {
  destinationPlace: google.maps.places.PlaceResult | null;
  originPlace: google.maps.places.PlaceResult | null;
  marker: google.maps.marker.AdvancedMarkerElement | null;
  markerRef: (m: AdvancedMarkerRef | null) => void;
  destinationMarker: google.maps.marker.AdvancedMarkerElement | null;
  DestinationmarkerRef: (m: AdvancedMarkerRef | null) => void;
}

const BackgroundMap = ({ markerRef, marker, destinationPlace, originPlace, DestinationmarkerRef, destinationMarker }: IBackGroundMap) => {
  return (
    <div className="flex flex-1">
      <Map mapId={'MY_ID'} defaultZoom={14} defaultCenter={{ lat: -23.1171, lng: -46.5502 }} gestureHandling={'greedy'} disableDefaultUI={true}>
        <AdvancedMarker ref={markerRef} position={null} />
        {destinationPlace && <AdvancedMarker ref={DestinationmarkerRef} />}
      </Map>
      <MapControl position={ControlPosition.TOP}></MapControl>
      <MapHandler place={originPlace} marker={marker} />
      <MapHandler place={destinationPlace} marker={destinationMarker} />
    </div>
  );
};

export default BackgroundMap;
