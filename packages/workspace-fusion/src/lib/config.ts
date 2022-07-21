import { DataSourceController } from '@equinor/datasource';
import { FilterController } from '@equinor/filter';
import { GardenController } from '@equinor/garden';
import { FusionWorkspaceController } from './types';

export function dataSourceConfig<TData, TControllers, TContext>(
    dc: DataSourceController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    dc.onDataChanged((data: TData[]) => {
        wc.setOriginalData(data);
    });
}

export function gardenConfig<TData, TControllers, TContext>(
    gc: GardenController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    wc.onFilteredDataChanged((data) => gc.setData(data));
    // const old = gc.clickEvents.onClicksItem;

    // gc.clickEvents.onClickItem = (arg1, arg2) => {
    //     old && old(arg1, arg2);
    //     wc.notifyOnClick({ item: arg1, controller: arg2 });
    // };
}

export function filterConfiguration<TData, TControllers, TContext>(
    fc: FilterController<TData>,
    wc: FusionWorkspaceController<TData, TControllers, TContext>
) {
    const old = fc.setFilteredData;

    // Todo Gustav make onFilterDataChange on the filter controller, then one need for the old method here?
    fc.setFilteredData = (newData) => {
        old(newData);
        wc.setFilteredData(newData);
    };

    wc.onOriginalDataChanged((data) => {
        fc.setData(data);
        fc.createFilterValues();
        fc.filter();
    });
}
