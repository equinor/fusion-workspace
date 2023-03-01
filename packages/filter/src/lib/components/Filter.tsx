import { FilterContext } from '../hooks';
import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search, drag_handle, chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { useContext } from 'react';
Icon.add({ playlist_add, search, drag_handle, chevron_down, chevron_up });
/**
 * CC filter used in workspace
 * Requires being wrapped in FilterContextProvider
 */
export function Filter() {
  const controller = useContext(FilterContext);
  if (!controller) {
    return null;
  }
  return <QuickFilter controller={controller} />;
}
