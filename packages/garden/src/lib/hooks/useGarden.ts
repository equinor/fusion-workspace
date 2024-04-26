import { useContext } from 'react';
import { GardenContext, GardenState } from '../context/gardenContext';

export function useGarden(): GardenState {
  const context = useContext(GardenContext);
  if (!context) {
    throw new Error('Garden context called outside the provider');
  }
  return context;
}
