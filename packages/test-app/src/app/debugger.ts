import { ReactWorkspaceController } from '@equinor/workspace-react-old';
export function debugPlugin<TData, TControllers, TOnClick, TError, TContext>(
    wc: ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>
) {
    console.log(`###### WORKSPACE DEBUG MODULE REGISTERED ######`);
    wc.onClick((ev) => {
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
