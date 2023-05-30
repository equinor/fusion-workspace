import { useContext } from 'react';
import { FilterStylesContext } from '../components/Filter';

export const useFilterStyles = () => {
  const context = useContext(FilterStylesContext);
  return context;
};
