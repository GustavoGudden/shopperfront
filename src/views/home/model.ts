import { Coordinates } from '@/types/Coordenate';
import { IEstimateResponse } from '@/types/estimeResponse';
import { AdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Dispatch, RefObject, SetStateAction } from 'react';

export interface HomeModel {
  targetRef: RefObject<HTMLDivElement>;
  destinationPlace: google.maps.places.PlaceResult | null;
  setDestinationPlace: Dispatch<SetStateAction<google.maps.places.PlaceResult | null>>;
  estimateResponse: IEstimateResponse | undefined;
  markerRef: (m: AdvancedMarkerRef | null) => void;
  originPlace: google.maps.places.PlaceResult | null;
  setOriginPlace: Dispatch<SetStateAction<google.maps.places.PlaceResult | null>>;
  userId: string;
  isDriversVisible: boolean;
  setUserId: Dispatch<SetStateAction<string>>;
  marker: google.maps.marker.AdvancedMarkerElement | null;
  setMark: Dispatch<SetStateAction<Coordinates[]>>;
  destinationMarker: google.maps.marker.AdvancedMarkerElement | null;
  DestinationmarkerRef: (m: AdvancedMarkerRef | null) => void;
  selectDriver: number;
  setSelectDriver: Dispatch<SetStateAction<number>>;
  handleConfirmRace: (selectDriver: number) => Promise<void>;
  handleClickFindDrivers: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
