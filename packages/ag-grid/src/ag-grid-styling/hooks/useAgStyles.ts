import { useEffect } from 'react';
import { THEME_NAME } from '../styles';
import { injectAgStyles } from '../utils';

export const useAgStyles = () => {
  useEffect(injectAgStyles, []);

  useEffect(() => {
    const el = document.getElementsByClassName('ag-body-horizontal-scroll').item(0);
    if (el) {
      try {
        el.remove();
      } catch (e) {
        console.log('Failed to remove element');
      }
    }
  }, []);

  return THEME_NAME;
};
