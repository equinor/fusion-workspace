import { FindTabFunction, WorkspaceController } from '../Classes';

export function onTabChangedPlugin(
    controller: WorkspaceController<unknown>,
    callback: (activeTab: string | undefined) => void
) {
    const old = controller.setActiveTabIndex;
    controller.setActiveTabIndex = (tabIndex: string | FindTabFunction) => {
        old(tabIndex);
        callback(controller.activeTab);
    };
}
