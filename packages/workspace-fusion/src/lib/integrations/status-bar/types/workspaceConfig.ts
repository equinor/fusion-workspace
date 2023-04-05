/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/status-bar
 */

import { FilterGroup } from '@equinor/workspace-filter';
import { StatusItem } from '@equinor/workspace-status-bar';

type StatusBarConfig<TFilter> = (filters: FilterGroup[], signal?: AbortSignal) => Promise<StatusItem[]>;

export type { StatusItem, StatusBarConfig };
