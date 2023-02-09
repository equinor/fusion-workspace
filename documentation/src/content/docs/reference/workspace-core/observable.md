---
title: Observable
category: Workspace Core
tags:
    - observable
---

## Concept

Workspace core is a collection of generic services consumed by all the components in the fusion-workspace implementation.
The services is built upon the observer pattern. For the implementation RxJS is being used.
For most of the services we expose an object with a property and an observable mirroring the property state

```ts
// {data, data$, filteredData, filteredData$}
const dataService = createDataService();
data$.subscribe((val) => console.log('new data is ', val));
```

## Motivation

The core library was built to relieve coupling between the components in fusion-workspace, and also create an abstraction for the consumer. Applying state that concerns multiple components in the composition is tedious. The goal of the core services is to relieve that stress, by allowing you to set the state in one central place.
