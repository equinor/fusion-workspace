/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/status-bar
 */

import { FilterStateGroup } from '@equinor/workspace-filter';
import { StatusItem } from '@equinor/workspace-status-bar';

type StatusBarConfig<TFilter> = (filters: FilterStateGroup[], signal?: AbortSignal) => Promise<StatusItem[]>;

export type { StatusItem, StatusBarConfig };
