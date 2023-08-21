import { useContext } from 'react';
import { GardenConfigContext } from '../context/gardenConfig';

export function useGardenConfig() {
  const context = useContext(GardenConfigContext);
  if (!context) {
    throw new Error('Garden config context invoked out of bounds');
  }
  return context;
}
