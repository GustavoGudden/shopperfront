'use client';

import React from 'react';
import Selectlocation from '../../molecules/selectlocation';
import BackgroundMap from '../../molecules/backgroundMap';
import { HomeModel } from '@/views/home/model';
import DriversList from '../../molecules/driversList';

const ContentHomeWrapper = (HomeViewModel: HomeModel) => {
  const {
    estimateResponse,
    handleClickFindDrivers,
    setUserId,
    userId,
    markerRef,
    marker,
    destinationPlace,
    originPlace,
    setDestinationPlace,
    setOriginPlace,
    DestinationmarkerRef,
    destinationMarker,
    isDriversVisible,
    selectDriver,
    setSelectDriver,
    handleConfirmRace,
    targetRef,
  } = HomeViewModel;

  return (
    <>
      <section className="w-full mt-6 p-24 flex-row flex  rounded-[20px]">
        <Selectlocation
          originPlace={originPlace}
          setDestinationPlace={setDestinationPlace}
          setOriginPlace={setOriginPlace}
          handleClickFindDrivers={handleClickFindDrivers}
          userId={userId}
          setUserId={setUserId}
        />
        <BackgroundMap
          DestinationmarkerRef={DestinationmarkerRef}
          destinationMarker={destinationMarker}
          marker={marker}
          markerRef={markerRef}
          originPlace={originPlace}
          destinationPlace={destinationPlace}
        />
      </section>
      {isDriversVisible && (
        <div className="flex flex-row mt-6 p-24 rounded-[12px]">
          <div className="flex flex-1 rounded-l-[12px]" ref={targetRef}>
            <BackgroundMap
              DestinationmarkerRef={DestinationmarkerRef}
              destinationMarker={destinationMarker}
              marker={marker}
              markerRef={markerRef}
              originPlace={originPlace}
              destinationPlace={destinationPlace}
            />
          </div>
          <DriversList
            handleConfirmRace={handleConfirmRace}
            selectDriver={selectDriver}
            setSelectDriver={setSelectDriver}
            estimateResponse={estimateResponse}
          />
        </div>
      )}
    </>
  );
};

export default ContentHomeWrapper;
