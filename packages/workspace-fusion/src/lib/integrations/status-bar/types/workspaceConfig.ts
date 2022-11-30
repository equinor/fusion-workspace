/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/status-bar
 */

import { StatusItem } from '@equinor/workspace-status-bar';

type StatusBarConfig<TData> = (data: TData[]) => [StatusItem, ...StatusItem[]];

export type { StatusItem, StatusBarConfig };
