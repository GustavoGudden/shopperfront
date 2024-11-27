'use client';

import Hometemplates from '@/components/templates/home';
import React from 'react';
import { HomeViewModel } from './view-model';

const HomeView = () => {
  const {
    setMark,
    handleClickFindDrivers,
    setUserId,
    marker,
    markerRef,
    userId,
    estimateResponse,
    originPlace,
    destinationPlace,
    setDestinationPlace,
    setOriginPlace,
    DestinationmarkerRef,
    destinationMarker,
    isDriversVisible,
    selectDriver,
    setSelectDriver,
    handleConfirmRace,
    targetRef,
  } = HomeViewModel();

  return (
    <Hometemplates
      targetRef={targetRef}
      handleConfirmRace={handleConfirmRace}
      selectDriver={selectDriver}
      setSelectDriver={setSelectDriver}
      isDriversVisible={isDriversVisible}
      DestinationmarkerRef={DestinationmarkerRef}
      destinationMarker={destinationMarker}
      setUserId={setUserId}
      userId={userId}
      estimateResponse={estimateResponse}
      setMark={setMark}
      destinationPlace={destinationPlace}
      marker={marker}
      markerRef={markerRef}
      originPlace={originPlace}
      setDestinationPlace={setDestinationPlace}
      setOriginPlace={setOriginPlace}
      handleClickFindDrivers={handleClickFindDrivers}
    />
  );
};

export default HomeView;
