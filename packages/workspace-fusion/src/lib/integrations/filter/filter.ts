/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/filter
 */

import { FilterDataSource, FilterStateGroup, FilterStyles } from '@equinor/workspace-filter';

/**Garden types */
export type { FilterConfig, FilterStateGroup };

/** Override remove config types that is handled internally */
type FilterConfig = {
  dataSource: FilterDataSource;
  defaultUncheckedValues?: FilterStateGroup[];
  styles?: FilterStyles;
};
