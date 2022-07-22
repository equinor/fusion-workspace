# Workspace Fusion


[![Version](https://img.shields.io/npm/v/@equinor/workspace-fusion.svg)](https://npmjs.org/package/@equinor/workspace-core)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/workspace-fusion.svg)](https://npmjs.org/package/@equinor/workspace-core)
[![License](https://img.shields.io/npm/l/@equinor/workspace-fusion.svg)](https://github.com/equinor/fusion-workspace/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/workspace-fusion)](https://npmjs.org/package/@equinor/workspace-core)


- [Workspace Fusion](#workspace-fusion)
  - [Install from NPM](#install-from-npm)
  - [Extend Workspace](#extend-workspace)
  - [Building](#building)
  - [Running unit tests](#running-unit-tests)


## Install from NPM

```sh
    npm install @equinor/workspace-fusion --save
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
        test: CustomController<T>;
    }

    interface CustomController<T> {
        log: (data: T[]) => void;
    }

    const workspace = createFusionWorkspace<MyData, any, CustomWorkspaceControllers<MyData>>((ws) => {
        ws.addController<CustomController<MyData>>({
            name: 'dataLogger',
            controller: {
                log: (data) => console.log(data),
            },
        });

        ws.addMiddleware(() => {
            ws.onDataChanged((data) => ws.controllers.dataLogger.log(data));
        });
    });

```



This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build workspace-fusion` to build the library.

## Running unit tests

Run `nx test workspace-fusion` to execute the unit tests via [Jest](https://jestjs.io).
