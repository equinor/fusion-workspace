# Workspace Controller

[<< BACK](./Readme.md)

The workspace controller is a common hub for all controllers. The idea is for the workspace controller to be pure JS/TS and not be dependent on any JS framework. The Workspace controller will consist of the following.

- Controllers
  - Controller
  - Config
  - Name
- Middleware/Binders
  - Config
- Context (Not to be confused with fusion context)
- Workspace Events
- Source Data
- Filtered Data
- Persist

Here is an example of use se figure1:

```Mermaid
flowchart LR 
    classDef default fill:#0000,stroke:#333,stroke-width:4px,stroke-dasharray: 5 5,text-align:center;
    classDef controller fill:#006699,stroke:none,text-align:left;
    classDef config fill:#008899,stroke:none
    classDef viewConfig fill:#448800,stroke:none
    classDef middleware fill:#996666,stroke:none

    wc[<h>Workspace Controller</h2><span><br> - Controllers <br> - Middleware/Binders <br> - Config <br> - Context<br>- Workspace Events </span>]:::controller
    wsDataSource[<h2>Data Source</h2> <p> Controller]:::controller
    wsFilter[Data Filter Controller]:::controller
    wsBookmarks[Bookmarks Controller]:::controller

    wsFilterConfig[Data Source - Config]:::config
    wsDataSourceConfig[Data Filter - Config]:::config
    wsBookmarksConfig[Bookmarks - Config]:::config

    subgraph Core Read Controller
        wcErrorConfig[Error Config]:::config
        wcError[Error Controller]:::controller
    end

    subgraph Middleware
        wcLoggerMiddleware[Development Logger]:::middleware
    end

    wc --> wcLoggerMiddleware
    wsDataSource --> wcLoggerMiddleware
    wsFilter --> wcLoggerMiddleware
 

    wc --> wcErrorConfig --> wcError 
    

    subgraph Core Controllers
        direction BT
        wsFilter --> wsFilterConfig
        wsDataSource --> wsDataSourceConfig
    end


    subgraph Other Controllers
        wsBookmarks --> wsBookmarksConfig 
    end

    wsBookmarksConfig <--> wc
    wsDataSourceConfig <--> wc
    wsFilterConfig <--> wc


    gardenController[Garden Controller]:::controller
    gridController[Grid Controller]:::controller
    tableController[Table Controller]:::controller
    ganttController[Gant Controller]:::controller
    pbiController[PowerBi Controller]:::controller
    customController[Custom Controller]:::controller

    gardenConfig[Garden - Config]:::config
    gridConfig[Grid - Config]:::config
    tableConfig[Table - Config]:::config
    ganttConfig[Gantt - Config]:::config
    pbiConfig[PowerBi - Config]:::config
    customConfig[Custom - Config]:::config

    gardenViewConfig[Garden View Config]:::viewConfig
    gridViewConfig[Grid View Config]:::viewConfig
    tableViewConfig[Table View Config]:::viewConfig
    ganttViewConfig[Gantt View Config]:::viewConfig
    pbiViewConfig[PowerBi View Config]:::viewConfig
    customViewConfig[Custom View Config]:::viewConfig
    
    subgraph Views
        gardenViewConfig --> gardenController <--> gardenConfig 
        gridViewConfig --> gridController <--> gridConfig 
        tableViewConfig --> tableController <--> tableConfig 
        ganttViewConfig --> ganttController <--> ganttConfig 
        pbiViewConfig --> pbiController <--> pbiConfig 
        customViewConfig --> customController <--> customConfig 
    end

    gardenConfig <--> wc
    gridConfig <--> wc
    tableConfig <--> wc
    ganttConfig <--> wc
    pbiConfig <--> wc
    customConfig <--> wc
      
    
```

Figure 1. Workspace Controller connections for Fusion Workspace Framework

## Controllers

A collection of building blocks allows the creation of a workspace. And the building blocks themselves are interchangeable and will be customized toward the workspaces needs. `Controllers` are the actuators of the workspace; nothing happens without a controller. The goal is to create many small and specific controllers that do one thing well. `Middleware` will enable binding them together and unlocking endless possibilities.

## Middleware/Binders

Controllers are supposed to be 100% decoupled from each other. Binders/middleware is the translator that connects one or multiple controllers. This ensures that all controllers can be used standalone and ensures high flexibility with low complexity.

## Context

Reserved slot for the developer(you) to define and utilize. Most common use for it is to share data from one controller to another. Through context and middleware/binders.

## Workspace Events and functions

The workspace controller consists of the "Core" events that most controllers will depend on in some form. Core Workspace events are the following.

- OnError
- OnDataChange
- OnFilterDataChange
- OnRender
- OnTabChanges
- OnClick

Core Functions:

- ChangeData
- ChangeFilteredData
- Render
- ThrowError
- SetActiveTab
- AddController
- AddMiddleware

Controllers and middleware usually bind through workspace controller events. Alternatively, you can extend the workspace controller with common data fields through the controller's context property.
