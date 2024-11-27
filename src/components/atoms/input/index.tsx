import { Search } from 'lucide-react';

interface IInput {
  className: string;
}

export const InputRC = ({ className }: IInput) => {
  return (
    <div className={`${className} flex flex-row bg-gray-100 border rounded-[12px]`}>
      <div className="p-2">
        <Search width={20} height={20} color="#1e2044" />
      </div>
      <input type="text" className="flex-1 bg-gray-100 focus:outline-none focus:ring-0" />
    </div>
  );
};
