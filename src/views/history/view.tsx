'use client';

import { HistoryTemplate } from '@/components/templates/history';
import { HistoryViewModel } from './view-model';

interface IHomeView {
  userId: number;
}

export const HistoryView = ({ userId }: IHomeView) => {
  const { history, selectedRide, setSelectedRide, destinationPlace, originPlace, setDestinationPlace, setOriginPlace } = HistoryViewModel(userId);
  return (
    <HistoryTemplate
      history={history}
      selectedRide={selectedRide}
      setSelectedRide={setSelectedRide}
      setDestinationPlace={setDestinationPlace}
      setOriginPlace={setOriginPlace}
      destinationPlace={destinationPlace}
      originPlace={originPlace}
    />
  );
};
