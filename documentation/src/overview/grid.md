---
title: Grid
category: App Development
tags:
    - development
    - app
---

## Concept

The grid component we are using is [AG-Grid](https://www.ag-grid.com/), we have tried to keep the configuration as identical to the standard AG-Grid configuration as possible. This will make it easier to use as AG-Grid docs is very detailed.

AG-Grid documentation can be found [here](https://www.ag-grid.com/react-data-grid/)

## Basic example

```TS
    .addGridOptions({
        	columnDefinitions: [
    	{
    		field: 'commPkgNo',
    		valueGetter: (valueGetter) => valueGetter.data?.commpkgNo,
    		onCellClicked: undefined,
    	},
    	{ field: 'Description', valueGetter: (s) => s.data?.description },

    	{ field: 'Responsible', valueGetter: (s) => s.data?.responsible },
    	{ field: 'Area', valueGetter: (s) => s.data?.area },
    	{ field: 'System', valueGetter: (s) => s.data?.system },
    	    ],
        gridOptions: {
    	    pagination: true,
    	    paginationPageSize: 100,
        },
    })
```

## Advanced example

## Illustration

![Alt text](./pictures/gridIllustration.png 'Illustration')
