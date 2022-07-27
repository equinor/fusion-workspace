# Workspace Fusion

[![Version](https://img.shields.io/npm/v/@equinor/workspace-fusion.svg)](https://npmjs.org/package/@equinor/workspace-core)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/workspace-fusion.svg)](https://npmjs.org/package/@equinor/workspace-core)
[![License](https://img.shields.io/npm/l/@equinor/workspace-fusion.svg)](https://github.com/equinor/fusion-workspace/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/workspace-fusion)](https://npmjs.org/package/@equinor/workspace-core)

- [Workspace Fusion](#workspace-fusion)
  - [Install from NPM](#install-from-npm)
  - [About](#about)
  - [Fusion Workspace and Fusion Framework](#fusion-workspace-and-fusion-framework)
  - [Extend Workspace](#extend-workspace)
  - [Building](#building)
  - [Running unit tests](#running-unit-tests)

## Install from NPM

```sh
    npm install @equinor/workspace-fusion --save
```

## About

The `@equinor/workspace-fusion` id a Wrapper / helper  library for  `@equinor/workspace-react` extending functionality and providing tabs to display workspace data.Grid and Garden are some og the ways to display your data and more will come. The example under shows the structure of an workspace application, utilizing the `createFusionWorkspace` which takes a setup call back function receiving ann instance of the workspace controller.

```TS
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import Workspace ,{ useFilteredData } from '@equinor/workspace-react';


export const WorkspaceApp = () => {
const workspace = createFusionWorkspace((controller) => {
        controller
            .config({
                // Configuration
            })
            .addDataSource(()=>({
                //Data Source Config
            }))
            .addFilter(() => [
                // Filter Config
            ])
            .addGarden(()=>({
                // Garden Config
            }))
            .addGrid(()=>({
                // Garden Config
            }));
    });


    return (<Workspace controller={workspace} />);
}

```

## Fusion Workspace and Fusion Framework

The fusion workspace can utilize functionality provided by `fusion framework` this can be sone using the `useFusionWorkspaceContext`

> The `useFusionWorkspaceContext` will wrap `useFramework`, `useCurrentUser`and `useModuleContext` Hooks.

```TS
    export const useFusionWorkspaceContext = () => {
        const framework = useFramework();
        const modules = useModuleContext();
        const account = useCurrentUser();
        return {...framework, ...modules, ...account}
    }
```

By providing the fusion framework to the `createFusionWorkspaceApp`  the setup callback will be able to access `fusion context` and other features provided. example of this can be seen under.

```TS
const  workspaceSetup = (controller: FusionWorkspaceController<WorkOrder, Fusion>) => {
            controller.addDataSource(() => ({
                dataSource: async (signal?: AbortSignal): Promise<Response> => {
                    const myApi = ws.fusion.httpClient("myApi")
                    const { facilityId } = ws.fusion.context;
                    return await myApi.fetch(`api/${facilityId}/workOrders`);
                },
            }))
};

```

To provide the  `fusion framework` just do as shown in the example below.

```TS
export const WorkspaceAppComponent = () => {
    const fusion = useFusionWorkspaceContext()
    const workspace = useMemo(() => createFusionWorkspaceApp<WorkOrder, Fusion>(workspaceSetup, fusion),[framework.context.contextId]);


    if (!framework.context.contextId) {
        return (<ContextSelector/>)
    }

    return ( <Workspace controller={workspace} />);
};
```

## Extend Workspace

It is possible to extend the workspace with any controller or middleware.

> Under you see and example of how to extend and get all typings right. This might be overkill but you see
> how easy on can extend teh workspace and customization as needed.

```TS
    interface MyData {
        id: string;
        title: string;
    }

    interface CustomWorkspaceControllers<T> extends FusionWorkspaceControllers<T> {
        dataLogger: CustomController<T>;
    }

    interface CustomController<T> {
        log: (data: T[]) => void;
    }

    const workspace = createFusionWorkspace<MyData, Fusion, CustomWorkspaceControllers<MyData>>((controller) => {
        controller.addCustomController<CustomController<MyData>>({
            name: 'dataLogger',
            controller: {
                log: (data) => console.log(data),
            },
        }).addCustomMiddleware(() => {
            controller.onDataChanged((data) => controller.controllers.dataLogger.log(data));
        })// more config...;
    });
```

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build workspace-fusion` to build the library.

## Running unit tests

Run `nx test workspace-fusion` to execute the unit tests via [Jest](https://jestjs.io).
