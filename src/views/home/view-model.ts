'use client';
import { Coordinates } from '@/types/Coordenate';
import { useEffect, useRef, useState } from 'react';
import { HomeModel } from './model';
import { axiosClient } from '@/client/axios.client';
import { IEstimateResponse } from '@/types/estimeResponse';
import { toast } from 'react-toastify';
import { useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useRouter } from 'next/navigation';

export const HomeViewModel = (): HomeModel => {
  const [originPlace, setOriginPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [destinationPlace, setDestinationPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [mark, setMark] = useState<Coordinates[]>([]);
  const [userId, setUserId] = useState<string>('');
  const [estimateResponse, setEstimateResponse] = useState<IEstimateResponse>();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [DestinationmarkerRef, destinationMarker] = useAdvancedMarkerRef();
  const [isDriversVisible, setIsDriversVisible] = useState(false);
  const [selectDriver, setSelectDriver] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [estimateResponse]);

  const handleClickFindDrivers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId === '' || !originPlace || !destinationPlace) {
      toast.warning('Todos os campos devem estar preechidos');
      return;
    }
    try {
      const response = await axiosClient.post('ride/estimate', {
        customer_id: parseInt(userId),
        origin: {
          latitude: originPlace.geometry?.location?.lat(),
          longitude: originPlace.geometry?.location?.lng(),
        },
        destination: {
          latitude: destinationPlace.geometry?.location?.lat(),
          longitude: destinationPlace.geometry?.location?.lng(),
        },
      });
      if (response.status != 200) {
        return alert(response.data.error_code);
      }
      setIsDriversVisible(true);

      setEstimateResponse(response.data);
    } catch (e: any) {
      toast.error(e.response.data.error_code);
    }
  };

  const handleConfirmRace = async (driverIndex: number) => {
    try {
      const response = await axiosClient.patch('ride/confirm', {
        customer_id: parseInt(userId),
        origin: estimateResponse?.origin,
        destinationAdress: destinationPlace!.formatted_address,
        originAdress: originPlace!.formatted_address,
        destination: estimateResponse?.destination,
        distance: estimateResponse?.distance,
        duration: estimateResponse?.duration,
        value: estimateResponse?.options[driverIndex].value,
        driver: {
          id: estimateResponse?.options[driverIndex].id,
          name: estimateResponse?.options[driverIndex].name,
        },
      });
      if (response.status != 201) {
        toast.error(response.data.error_code);
        return;
      }
      router.push(`/history/${userId}`);
    } catch (e: any) {
      toast.error(e.response.data.error_code);
    }
  };

  return {
    targetRef,
    handleConfirmRace,
    marker,
    selectDriver,
    setSelectDriver,
    markerRef,
    originPlace,
    setOriginPlace,
    destinationPlace,
    setDestinationPlace,
    estimateResponse,
    userId,
    setUserId,
    DestinationmarkerRef,
    destinationMarker,
    isDriversVisible,
    setMark,
    handleClickFindDrivers,
  };
};
