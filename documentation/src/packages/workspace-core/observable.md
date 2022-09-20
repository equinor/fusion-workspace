---
title: Observable
category: Workspace Core
tags:
    - observable
---

## Concept

The observable class is the core of the mediator services.

## Example

```TS
  const filterData = new Observable<TData[]>();
  
  this.onFilterDataChange = filterData.onchange;

  filterData.onchange((val) => {
   this.filteredData = val;
  });

  this.setFilteredData = filterData.setValue;
```
