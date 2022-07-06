import { WorkspaceController } from '../Classes';

export function onFilteredDataChangedPlugin(
    controller: WorkspaceController<unknown>,
    callback: (filteredData: unknown[]) => void
) {
    const old = controller.setFilteredData;
    controller.setFilteredData = (data) => {
        old(data);
        callback(data);
    };
}
