import React, { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import DriverOption from '../driverOption';
import { IDriver } from '@/types/driver';
import { IEstimateResponse } from '@/types/estimeResponse';
import TextRc from '../../atoms/text';
import { Car, Timer } from 'lucide-react';
import Chip from '../chip';
import { convertSecondsToMinutes } from '@/utils/convertSecondeToMinutes';
import { convertToKilometers } from '@/utils/convertMetersToKm';

interface IDriverList {
  selectDriver: number;
  setSelectDriver: Dispatch<SetStateAction<number>>;
  estimateResponse: IEstimateResponse | undefined;
  handleConfirmRace: (selectDriver: number) => Promise<void>;
}

const DriversList = ({ estimateResponse, selectDriver, setSelectDriver, handleConfirmRace }: IDriverList) => {
  return (
    <div className=" flex flex-1 min-h-[500px] p-12  rounded-r-[12px] shadow-2xl bg-white">
      <div className=" flex flex-col rounded-[12px] w-full gap-6">
        <div className="flex flex-col gap-2">
          <TextRc className="font-bold text-[40px] text-indigo">Select your driver</TextRc>
          <TextRc as={'h2'} className="text-[20px]">
            Select the driver that meets your criteria
          </TextRc>
          <div className="flex flex-row gap-4">
            <Chip text={convertSecondsToMinutes(estimateResponse!.duration)} Icon={Timer} width={100} />
            <Chip text={convertToKilometers(estimateResponse!.distance)} Icon={Car} width={150} />
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-4 max-h-[400px] overflow-y-auto flex-1  no-scrollbar">
          {estimateResponse!.options.map((item, index) => (
            <DriverOption
              isFocus={selectDriver === index}
              key={index}
              driver={item}
              onClick={() => setSelectDriver(index)}
              selectDriver={selectDriver}
            />
          ))}
        </div>
        <div className="w-full flex justify-between mt-12">
          <button className="bg-indigo py-4 px-8 rounded-xl text-gray-100 font-semibold text-[16px]">voltar</button>
          <button className="bg-indigo py-4 px-8 rounded-xl text-gray-100 font-semibold text-[16px]" onClick={() => handleConfirmRace(selectDriver)}>
            Confirm trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriversList;
