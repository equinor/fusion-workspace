---
title: Workspace Core
category: Project
tags:
- core
- mediator
- controller
---

<ModuleBadge module="workspace-core" />

## Concept

The workspace mediator is a common hub for all workspace related controllers, written following the mediator pattern. It helps interaction between independent controllers. The idea is for the mediator to be pure JS/TS and not be dependent on any JS framework. Mediator is not intended for standalone use. By extending the mediator it is possible to add library specific features. This is done to keep the core library as clean as possible.

::: tip test
test
:::

The intended use of the mediator is shown in fig.1 The two controllers and communicating through the mediator updating the data fields.

::: warning test
test
:::

```mermaid

graph LR

    classDef mediator fill:#006699,stroke:none,text-align:left,color:#fff;
    classDef config fill:#008899,stroke:none,color:#fff;
    classDef middleware fill:#997766,stroke:none,color:#fff;

    wc[<b>Workspace Mediator</b><span><br>  - Data<br> - Filtered data<br> - Add middleware <br> - Context<br>- Workspace events </span>]:::mediator
    wsDataSource[<b>Data Source</b> Controller]:::mediator
    wsFilter[<b>Data Filter</b> Controller]:::mediator

    wsFilterConfig[Data Source - Config]:::config
    wsDataSourceConfig[Data Filter - Config]:::config

    subgraph Read controller
        wcErrorConfig[Error Config]:::config
        wcError[Error Controller]:::mediator
    end

    subgraph Middleware
        wcLoggerMiddleware[Development Logger]:::middleware
    end

    wc --> wcLoggerMiddleware
    wc --> wcErrorConfig --> wcError


    subgraph Controllers
        direction BT
        wsFilter --> wsFilterConfig
        wsDataSource --> wsDataSourceConfig
    end

    wsDataSourceConfig <--> wc
    wsFilterConfig <--> wc

```

## Example

```TS
  import { WorkspaceMediator } from "@equinor/workspace-core"
  class ReactWorkspaceMediator extends WorkspaceMediator{
    constructor() {
      super()
    }

    // React Workspace Mediator implementations
  };
```
