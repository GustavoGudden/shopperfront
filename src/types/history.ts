export interface IHistoryResponse {
  customer_id: number;
  rides: IRide[];
}

export interface IRide {
  id: number;
  driverId: number;
  userID: number;
  destinationAdress: string;
  originAdress: string;
  date: string;
  origin: string;
  destination: string;
  value: number;
  driver: {
    id: number;
    name: string;
  };
}
