import { LucideProps, Timer } from 'lucide-react';
import React, { ReactNode } from 'react';
import TextRc from '../../atoms/text';

// import { Container } from './styles';

interface IChip {
  text: string | number;
  width: number;
  Icon: React.FC<LucideProps>;
}

const Chip = ({ Icon, text, width }: IChip) => {
  return (
    <div className={`flex flex-row gap-2 items-center p-2 bg-indigo w-[${width}px] justify-center rounded-lg  `}>
      <Icon width={25} height={25} color="#ffffff" />
      <TextRc as={'h2'} className="text-white">
        {text}
      </TextRc>
    </div>
  );
};

export default Chip;
