import { FilterController } from '@equinor/filter';
import { FilterConfigurator } from '../types/configurator';
import { FusionWorkspaceController, FusionWorkspaceControllerInternal } from '../types/types';

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
    controller: FusionWorkspaceControllerInternal<TData, TControllers, TContext>,
    configurator: FilterConfigurator<TData, TControllers, TContext>
) {
    const filterController = new FilterController<TData>();
    filterController.addValueFormatters(configurator(controller));

    controller.addController<
        FilterController<TData>,
        FusionWorkspaceControllerInternal<TData, TControllers, TContext>
    >({
        name: 'filter',
        controller: filterController,
        config: filterConfiguration,
    });
    return controller;
}
