import { IHistoryResponse } from '@/types/history';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { AdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Dispatch, SetStateAction } from 'react';

export interface HistoryModel {
  history: IHistoryResponse | null;

  selectedRide: number;
  setSelectedRide: Dispatch<SetStateAction<number>>;

  originPlace: LatLngLiteral | null | undefined;
  setOriginPlace: Dispatch<SetStateAction<LatLngLiteral | null | undefined>>;

  destinationPlace: LatLngLiteral | null | undefined;
  setDestinationPlace: Dispatch<SetStateAction<LatLngLiteral | null | undefined>>;
}
