---
title: Fusion Workspace
category: Fusion Workspace
tags:
    - project
---

Composed of mulitiple libraries that combined allows for development of fusion workspace apps. Core functionality is one data set displayed in different user perspectives. This is achieved by data handling, tab navigation, and allowing you to react around page change / config change and data changes.

| Libraries                                                                                           | Description                                                                           |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Workspace Core](https://github.com/equinor/fusion-workspace/tree/main/packages/workspace-core)     | Core part in a workspace, a pure JS library.                                          |
| [Workspace React](https://github.com/equinor/fusion-workspace/tree/main/packages/workspace-react)   | Wrapper for workspace core adding react functionality and supplying Workspace hooks.  |
| [Workspace Fusion](https://github.com/equinor/fusion-workspace/tree/main/packages/workspace-fusion) | A simplified way to create a workspace Bootstrapped with view components from fusion. |

## Coding Patters

Fusion workspace is built upon common coding patterns. `Workspace Core` is built around the `mediator` pattern. All views and Workspace react is using the controller pattern, and Workspace Fusion is using a builder / factory pattern for workspace configuration.

## User Perspective

Fusion Workspace goal is to give the user a unified look and feel in workspace applications. And the ability to view filtered data from different perspectives.

[Read More Here](https://github.com/equinor/fusion-workspace)
