import { HistoryWrapper } from '@/components/organisms/historyWrapper';
import HeaderComponent from '../../ui/header';
import { HistoryModel } from '@/views/history/model';

export const HistoryTemplate = (historyViewModel: HistoryModel) => {
  return (
    <main className="w-full">
      <HeaderComponent />
      <HistoryWrapper {...historyViewModel} />
    </main>
  );
};
