import { useEffect } from 'react';
import { THEME_NAME } from '../styles';
import { injectAgStyles } from '../utils';

export const useAgStyles = () => {
  useEffect(injectAgStyles, []);
  return THEME_NAME;
};
