import { DataSourceController } from '@equinor/datasource';
import { FusionWorkspaceController } from './types';

export function dataSourceConfig<TData, TControllers, TContext>(
    dc: DataSourceController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    dc.onDataChanged((data: TData[]) => wc.setOriginalData(data));
}
