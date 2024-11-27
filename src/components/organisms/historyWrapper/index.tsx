'use client';

import { InputRC } from '@/components/atoms/input';
import TextRc from '@/components/atoms/text';
import { RideHistoryItem } from '@/components/molecules/rideHistoryItem';
import { HistoryModel } from '@/views/history/model';
import { AdvancedMarker, ControlPosition, Map, MapControl } from '@vis.gl/react-google-maps';
import { use, useEffect } from 'react';

export const HistoryWrapper = (HistoryViewModel: HistoryModel) => {
  const { history, destinationPlace, originPlace, selectedRide, setSelectedRide } = HistoryViewModel;

  return (
    <div className="w-full mt-4 p-24 flex-row flex">
      <div className="bg-white flex flex-row rounded-[12px] shadow-2xl">
        <div className=" flex flex-col flex-1 gap-4 p-6 border-r-2 border-gray-100 ">
          <div className="flex justify-between items-center">
            <TextRc className="text-[40px] text-indigo font-bold">Rides History</TextRc>
          </div>
          <TextRc className="">
            This is the history of all your rides. Here, you can view details about the routes taken, times, destinations, and much more. Use this
            section to track all the important information related to your trips.
          </TextRc>
          <div className="h-[400px] flex">
            <Map mapId={'MY_ID'} defaultZoom={9} defaultCenter={{ lat: -23.1171, lng: -46.5502 }} gestureHandling={'greedy'} disableDefaultUI={true}>
              <AdvancedMarker key={`marker-origin-${originPlace?.lat}-${originPlace?.lng}`} position={originPlace} />
              <AdvancedMarker key={`marker-destination-${destinationPlace?.lat}-${destinationPlace?.lng}`} position={destinationPlace} />
              <MapControl position={ControlPosition.TOP}></MapControl>
            </Map>
          </div>
        </div>
        <div className=" flex-1 h-full  p-6">
          <div className="flex justify-between items-center">
            <TextRc className="text-[40px] text-indigo font-bold">your last races</TextRc>
            <InputRC className="" />
          </div>
          <div className="flex flex-col h-[450px] mt-4 overflow-y-auto no-scrollbar gap-2">
            {history != null ? (
              history!
                .rides!.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordena pela data do mais recente ao mais antigo
                .map((ride, index) => {
                  return <RideHistoryItem ride={ride} key={index} isFocus={selectedRide === index} onclick={() => setSelectedRide(index)} />;
                })
            ) : (
              <>
                <h1>Nenhuma corrida encontrada</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
