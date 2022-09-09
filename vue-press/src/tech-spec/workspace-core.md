---
title: Workspace Core
category: Tech-Spec
tags:
    - spec
    - mediator
    - controller
    - core
    - hub
---

## Concept

Workspace core should b a library independent and it's main role is to allow various part of a workspace to communicate. This trough a common hub. The Core library will be written in pure Typescript.

## Mediator

A hub allowing for communication between controllers. it should be composed of smaller components to keep things clean. These components will be called services.
main services will be `dataService` and `errorService`

::: warning Communication
The mediator should be the only communication device, and there should not be direct communications between controllers.
:::

```mermaid
graph LR

    classDef mediator fill:#006699,stroke:none,text-align:left,color:#fff;
    classDef config fill:#008899,stroke:none,color:#fff;
    classDef middleware fill:#997766,stroke:none,color:#fff;

    wc[<b>Mediator</b><span><br>  - data<br> - filtered data<br> - middleware <br> - context<br>- events </span>]:::mediator
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

## Services

### Observable

A Utility building blok for creating reactive services.

### Data Service

The `dataService` as the name implies, is in charge off data, it will consist of the original data and a filtered data set. Each of them triggers an corresponding event when data changes.

```mermaid
sequenceDiagram
    participant Workspace Mediator
    participant Garden Controller
    participant DataSource
    participant Filter

    Garden Controller ->> Workspace Mediator: Add controller and config to Workspace Mediator.

    Note over Workspace Mediator: Workspace Mounted.

    Workspace Mediator ->> DataSource: Fires of request for data source
    Note over DataSource: If needed maps data to required Type
    DataSource ->>Workspace Mediator: Returns Data

    Note over Workspace Mediator: Fires onDataChange Event with data.
    Workspace Mediator ->> Filter: Send Data
    Note over Filter: Filters incoming data with provided filter
    Filter ->> Workspace Mediator: Return filteredData
    Note over Workspace Mediator: Fires onFilteredDataChange Event with filtered data.

    Workspace Mediator ->> Garden Controller : Add data to garden.
    Note over Garden Controller: Render Garden
```

### Error Service

The `errorService` is in charge of centralizing all error in a workspace. It should have pan event for when errors occur and away of throwing errors.

### Url Service

the `urlService` is in change of dispatching events when url changes and splitting ut query parameters.

::: info Query Parameters
the url service wil not handle any query parameters only dispatch events, the handling of query parameters will be done at a higher level.
:::

### Selection Service

`selectionService` as the name implies handles workspace selection and stores the selection for controller use.

### Click Service

This service is for handling workspace related clicks, mainly a helper service for the `selectionService`.
