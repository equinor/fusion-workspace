import { genericStyles } from '../styles/genericStyles.css';
import { agStyles } from '../styles/gridStyles.css';
import { concat } from './concat';

/**
 *  Function for injecting ag grid styles into document header
 * @returns cleanup function
 */
export function injectAgStyles(): VoidFunction {
  const style = document.createElement('style');
  style.textContent = concat(agStyles, genericStyles);
  style.id = 'ag-theme-material';
  document.head.append(style);

  return () => {
    style.remove();
  };
}
