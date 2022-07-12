# Workspace React Wrapper

[<< BACK](/README.md)

A simple React wrapper for the workspace providing hooks, context, utils, Types and Visual components for the workspace.
The `useWorkspaceController` hook is the main component in this library.Is is a wrapper for the workspace controller.
This will be used in the Visual tabs in the workspace.

The visual components here is mainly the layout and all needed to create a workspace. This wil not include Garden, Grid tab and so on. This wil be provided in the `Fusion Workspace Framework`.

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
