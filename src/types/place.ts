export interface IPlaceState {
  geometry: {
    lat: number;
    lng: number;
  };
  place: google.maps.places.PlaceResult | null;
}
