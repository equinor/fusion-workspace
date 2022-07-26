import { FilterController } from '@equinor/filter';
import { FusionWorkspaceController } from '../types/types';

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

    wc.onDataChanged((data) => {
        fc.setData(data);
        fc.createFilterValues();
        fc.filter();
    });
}

export function addDataFilterController<TData, TControllers, TContext>(
    controller: FusionWorkspaceController<TData, TControllers, TContext>
) {
    controller.addController<
        FilterController<TData>,
        FusionWorkspaceController<TData, TControllers, TContext>
    >({
        name: 'filter',
        controller: new FilterController<TData>(),
        config: filterConfiguration,
    });
    return controller;
}
