import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState } from 'react';

interface PlaceAutocompleteProps {
  placeholder: string;
  disabled: boolean;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const PlaceAutocomplete = ({ onPlaceSelect, placeholder, disabled }: PlaceAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;
    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <input
      ref={inputRef}
      disabled={disabled}
      type="text"
      className={`border-slate-900 border p-4 rounded-md bg-gray-100 placeholder:text-gray-700 placeholder:text-[16px] placeholder:font-light ${
        disabled && 'border-none opacity-45'
      }`}
      placeholder={placeholder}
    />
  );
};
