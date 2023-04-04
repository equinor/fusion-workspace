/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/filter
 */

import { FilterDataSource } from '@equinor/workspace-filter';

/**Garden types */
export type { FilterConfig };

/** Override remove config types that is handled internally */
type FilterConfig = {
  dataSource: FilterDataSource;
};
