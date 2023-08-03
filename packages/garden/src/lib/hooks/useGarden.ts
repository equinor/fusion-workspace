import { useContext } from 'react';
import { GardenContext } from '../context/gardenContext';

export function useGarden() {
  const context = useContext(GardenContext);
  if (!context) {
    throw new Error('Garden context called outside the provider');
  }
  return context;
}
