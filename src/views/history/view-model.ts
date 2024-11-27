'use client';

import { useEffect, useState } from 'react';
import { HistoryModel } from './model';
import { IHistoryResponse } from '@/types/history';
import { axiosClient } from '@/client/axios.client';
import { toast } from 'react-toastify';

import { LatLngLiteral } from '@googlemaps/google-maps-services-js';

export const HistoryViewModel = (id: number): HistoryModel => {
  const [history, setHistory] = useState<IHistoryResponse | null>(null);
  const [originPlace, setOriginPlace] = useState<LatLngLiteral | null | undefined>(null);
  const [destinationPlace, setDestinationPlace] = useState<LatLngLiteral | null | undefined>(null);
  const [selectedRide, setSelectedRide] = useState(0);

  const fecthHistory = async () => {
    try {
      const response = await axiosClient.get(`ride/${id}`);
      if (response.status != 200) return toast.error(response.data.erro_code);
      setHistory(response.data);
    } catch (e: any) {
      toast.error(e.data.errro_code);
    }
  };

  const setCoordenates = async (index: number) => {
    if (history) {
      if (history.rides) {
        if (history.rides[index].origin) {
          setOriginPlace({
            lat: parseFloat(history!.rides[index].origin.split(' ')[0]),
            lng: parseFloat(history!.rides[index].origin.split(' ')[1]),
          });
          setDestinationPlace({
            lat: parseFloat(history!.rides[index].destination.split(' ')[0]),
            lng: parseFloat(history!.rides[index].destination.split(' ')[1]),
          });
        }
      }
    }
  };

  useEffect(() => {
    fecthHistory();
  }, []);

  useEffect(() => {
    if (history) {
      setCoordenates(0);
    }
  }, [history]);
  useEffect(() => {
    setCoordenates(selectedRide);
  }, [selectedRide]);

  return { history, selectedRide, setSelectedRide, destinationPlace, setDestinationPlace, originPlace, setOriginPlace };
};
