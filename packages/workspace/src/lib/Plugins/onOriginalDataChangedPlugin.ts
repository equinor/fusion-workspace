import { WorkspaceController } from '../Classes';

export function onOriginalDataChangedPlugin(
    controller: WorkspaceController<unknown>,
    callback: (newData: unknown[]) => void
) {
    const old = controller.setOriginalData;
    controller.setOriginalData = (data) => {
        old(data);
        callback(data);
    };
}
