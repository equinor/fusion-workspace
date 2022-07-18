# Workspace React Wrapper

[<< BACK](/README.md)

A simple React wrapper for the workspace supplying hooks, context, utils, types and visual components for the workspace. The `useWorkspaceController` hook is the main component in this Library. Is a wrapper for the workspace controller. This will be used in the visual tabs in the workspace.

The visual components here is the layout and all needed to create a workspace. This will not include Garden, Grid tab and more. This will be provided in the `Fusion Workspace Framework`.

## Library Content

This library includes:

### Components

- WorkspaceNavigation
- WorkspaceStatusBar
- WorkspaceBody
- WorkspaceDataLoader
- WorkspaceHeader
- WorkspaceLoadingSpinner
- WorkspaceProvider
- WorkspaceFilter
- WorkspaceTab
- WorkspaceError
- WorkspaceInfoPage
- WorkspaceContextSelectPage
- WorkspaceContextSelector
- Workspace

### Context

- WorkspaceContext

### Hooks

- useWorkspaceController
- useFilteredData
- useOriginalData
- useActiveTab

### Types

- WorkspaceController
