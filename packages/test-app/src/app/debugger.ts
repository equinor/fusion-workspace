import { WorkspaceController } from '@workspace/workspace-core-old';

export function debugPlugin(wc: WorkspaceController<unknown>) {
    console.log(`###### WORKSPACE DEBUG MODULE REGISTERED ######`);
    wc.onClickCallback((ev) => {
        workspaceLogger('OnClick', ev);
    });
    wc.onError((err) => {
        workspaceLogger('Error', err);
    });
    wc.onFilteredDataChanged((da) => {
        workspaceLogger('FData changed', da);
    });
    wc.onOriginalDataChanged((da) => {
        workspaceLogger('OData changed', da);
    });
    wc.onTabChanged((to, from) => {
        workspaceLogger(`Tab change ${from} -> ${to}`, { to, from });
    });
}

const consoleStyle = ['color: yellow', 'background-color: black'].join(';');

function workspaceLogger(topic: string, stack: any, cb?: () => void) {
    console.groupCollapsed(`%cWorkspace - ${topic}`, consoleStyle);
    console.log(stack);
    cb && cb();
    console.groupEnd();
}
