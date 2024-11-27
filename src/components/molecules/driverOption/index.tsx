import { IDriver } from '@/types/driver';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import TextRc from '../../atoms/text';

interface IDriverOption {
  isFocus: boolean;
  selectDriver: number;
  driver: IDriver;
  onClick: () => void;
}

const DriverOption = ({ driver, onClick, isFocus }: IDriverOption) => {
  return (
    <div className={`flex flex-row p-4 rounded-[12px] ${isFocus && 'border-[3px]'} ${isFocus && 'border-indigo'}`} tabIndex={0} onClick={onClick}>
      <Image src="/car.png" alt="carro" width={124} height={124} />
      <div className="flex flex-col justify-start w-full">
        <TextRc className="font-bold text-[32px] text-indigo leading-[50px]">ShopperGo</TextRc>
        <TextRc className=" text-[20px] font-medium text-indigo">{driver.name}</TextRc>
        <div className="flex flex-row"></div>
        <TextRc className=" text-[14px] font-medium text-indigo">{driver.description}</TextRc>
      </div>
      <div className="flex w-full  items-end flex-col">
        <TextRc className="font-medium text-[20px] ">R${driver.value}</TextRc>
        <div className="flex-row flex">
          {Array.from({ length: driver.review.rating }, (_, index) => (
            <Star fill="yellow" strokeWidth={0} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverOption;
