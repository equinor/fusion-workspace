---
title: Workspace Mediator
category: workspace-core-spec
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
