![Equinor Logo](./images/logo.png)

# Fusion Workspace v1.0.0

(CC workspace v2.0)

> Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.

## Pre work and speck

- [ ] New Workspace Speck
- [ ] Workspace Diagrams
- [x] Workspace Workshop
- [ ] Apps conversion and scale strategy.

> This is a speck document for the `Fusion Project Portal 1.0.0v` based on proof-of-concept `Johan Castberg Portal`. This is just an assumption of a hi level scope for the project to come, only to verify the initial thoughts. 

The work required to scale can be split into three parts. Work related to the workspace and the components it relies on, the Project Portal, and the conversion of `Castberg` apps to be fusion powered and ready for scale.  

- Workspace Controller
- Fusion React Wrapper  
- Fusion Workspace Framework
- Apps conversion / scale

These document will focus on the workspace section of the pre-work.

## Content

| Core Pages | Description |
|-|-|
[Workspace Controller](./WorkspaceController.md) | Core component in a workspace, a pure JS library.
[Workspace React Wrapper](./WorkspaceReactWrapper.md) | Wrapper for the Workspace Controller
[Fusion Workspace Framework](./FusionWorkspaceFramework.md) | A simplified way to create a workspace Bootstrapped with view components utilizing the Workspace React Wrapper.
[Fusion Workspace App](./FusionWorkspaceApp.md) | How a app is created.
|**Other Pages**|
[Workspace Specification / Feature List](./WorkspaceProjectFeatureList.md)
