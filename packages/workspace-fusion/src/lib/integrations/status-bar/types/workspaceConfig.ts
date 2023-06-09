/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/status-bar
 */

import { FilterState } from '@equinor/workspace-filter';
import { StatusItem } from './statusItem';

type StatusBarConfig = (filters: FilterState, signal?: AbortSignal) => Promise<StatusItem[]>;

export type { StatusItem, StatusBarConfig };
