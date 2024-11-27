import React, { Dispatch, SetStateAction } from 'react';
import TextRc from '../../atoms/text';
import { Coordinates } from '@/types/Coordenate';
import { PlaceAutocomplete } from '../placeAutoComplete';

interface ISetLocation {
  userId: string;
  originPlace: google.maps.places.PlaceResult | null;
  setUserId: Dispatch<SetStateAction<string>>;
  setDestinationPlace: Dispatch<SetStateAction<google.maps.places.PlaceResult | null>>;
  setOriginPlace: Dispatch<SetStateAction<google.maps.places.PlaceResult | null>>;
  handleClickFindDrivers: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const SelectLocation = ({ handleClickFindDrivers, setUserId, userId, setDestinationPlace, setOriginPlace, originPlace }: ISetLocation) => {
  console.log(setOriginPlace === null ? true : false);
  return (
    <div className="flex flex-col bg-[#ffff] rounded-l-[20px] shadow-md p-8 gap-6">
      <TextRc className="font-bold text-[40px]">Where can we pick you up?</TextRc>
      <TextRc>Click on the map to add an entry and exit location</TextRc>
      <form onSubmit={(e) => handleClickFindDrivers(e)} className="flex flex-col w-full gap-4">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border-slate-900 border p-4 rounded-md bg-gray-100 placeholder:text-gray-700 placeholder:text-[16px] placeholder:font-light"
          placeholder="Select user ID"
        />
        <PlaceAutocomplete disabled={!userId ? true : false} onPlaceSelect={setOriginPlace} placeholder="Select your landing location" />
        <PlaceAutocomplete disabled={!originPlace ? true : false} onPlaceSelect={setDestinationPlace} placeholder="Select your end location" />
        <div className="w-full flex justify-end">
          <button className="bg-indigo py-4 px-8 rounded-xl text-gray-100 font-semibold text-[16px]" type="submit">
            Find drivers
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectLocation;
