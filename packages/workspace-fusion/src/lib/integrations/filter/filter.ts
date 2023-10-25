/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/filter
 */

import { FilterDataSource, FilterStateGroup, FilterStyles, FilterState } from '@equinor/workspace-filter';

export type { FilterConfig, FilterStateGroup, FilterState };

/** Override remove config types that is handled internally */
type FilterConfig = {
  dataSource: FilterDataSource;
  styles?: FilterStyles;
};
