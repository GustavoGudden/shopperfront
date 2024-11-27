import TextRc from '@/components/atoms/text';
import { IRide } from '@/types/history';
import { formatDate } from '@/utils/convertData';

interface IRideItem {
  ride: IRide;
  isFocus: boolean;
  onclick: () => void;
}

export const RideHistoryItem = ({ ride, isFocus, onclick }: IRideItem) => {
  return (
    <div className="flex flex-row w-full justify-between border-indigo border rounded-[12px]" onClick={onclick}>
      <div className="p-4">
        <TextRc className={`${isFocus && 'text-teal-900'} font-bold text-[24px] text-indigo leading-[40px]`}>Shopper Go</TextRc>
        <TextRc className="text-indigo font-semibold text-[16px]">{ride.driver.name}</TextRc>
        <TextRc className="">{`From:${ride.destinationAdress} - To:${ride.originAdress}`}</TextRc>
      </div>
      <div className=" flex flex-col p-4 items-end ">
        <TextRc className="leading-[40px]">{formatDate(ride.date)}</TextRc>
        <TextRc className="">{ride.value}</TextRc>
      </div>
    </div>
  );
};
