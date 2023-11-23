import { useContext } from 'react';
import { ResizeContext } from './ResizeProvider';

export const useResizeContext = () => {
  const context = useContext(ResizeContext);
  if (!context) {
    throw new Error('Sidesheet context invoked out of bounds');
  }
  return context;
};
