import { GardenController } from '../classes';
import { useContext } from 'react';
import { GardenContext } from '../components';

export const useGardenContext = <TData extends Record<PropertyKey, unknown>, TContext>() => {
  const context = useContext(GardenContext);
  if (!context) throw new Error('Garden context invoked out of bounds');
  return context as unknown as GardenController<TData, TContext>;
};
