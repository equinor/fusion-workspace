# Workspace React Wrapper

[<< BACK](/README.md)

A simple React wrapper for the workspace providing hooks, context, utils, Types, and Visual components for the workspace. The useWorkspaceController hook is the main component of this library. Is a wrapper for the workspace controller. This will be used in the Visual tabs in the workspace.

The visual components here are mainly the layout and all needed to create a workspace. This will not include the Garden, Grid tab, and so on. This will be provided in the Fusion Workspace.

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
