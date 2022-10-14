---
title: Filter
category: App Development
tags:
    - development
    - app
---

## Concept

Fusion workspace contains a builtin filter component. It's configuration is easy and it can handle complex filtering. Mandatory config for one filter group is an object containing a name and a function that returns a value. `See example below`

## Example configuration

```TS

.addFilter([
    {
     name: 'Comm status',
     valueFormatter: (pkg) => pkg.commpkgStatus,
     isQuickFilter: true,
     customValueRender: RenderStatus,
    },
    { name: 'Comm ', valueFormatter: (pkg) => pkg.commpkgNo },
    {
     name: 'MC status',
     valueFormatter: (pkg) => pkg.mcStatus,
     isQuickFilter: true,
     customValueRender: RenderStatus,
    },
    {
     name: 'Discipline',
     valueFormatter: (pkg) => pkg.mcDisciplineCodes,
     isQuickFilter: true,
    },
    {
     name: 'Responsible',
     valueFormatter: (pkg) => pkg.responsible,
    },
    {
     name: 'System',
     valueFormatter: (pkg) => pkg.system,
    },
   ])


```

## Illustration

### Quick filter

![Alt text](./pictures/quick_filter.png 'Illustration')

### Expanded filter

![Alt text](./pictures/expanded_filter.png 'Illustration')

### API reference

```TS
 type FilterGroup = {
	 //Display name
   	 name: 'Comm status',
     //Function that returns the value
	 //returns: string | number | array<string | number>
	 valueFormatter: (pkg) => pkg.commpkgStatus,
	 //Should it be shown in the quick filter
     isQuickFilter: true,
	 //Your own render function
     customValueRender: RenderStatus,
 }
```
