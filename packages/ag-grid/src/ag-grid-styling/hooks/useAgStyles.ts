import { useEffect } from 'react';
import { THEME_NAME } from '../styles';
import { injectAgStyles } from '../utils';

export const useAgStyles = () => {
  useEffect(injectAgStyles, []);
  document.getElementsByClassName('ag-body-horizontal-scroll').item(0)?.remove();
  return THEME_NAME;
};
