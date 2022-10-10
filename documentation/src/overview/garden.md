---
title: Garden
category: App Development
tags:
    - development
    - app
---

## Concept

Garden aids in visualizing items in a grouped context. Garden supports grouping and recursive grouping of items based on criterias.

## Basic example

```TS
.addGarden({
    /**Display name of every node */
    nodeLabelCallback: (s) => s.commpkgNo,
    /** Returns a unique identifier for a given item */
	getIdentifier: (s) => s.commpkgNo,
    /** Default view */
	initialGrouping: { horizontalGroupingAccessor: 'area', verticalGroupingKeys: [] },
	fieldSettings: {
        responsible: { label: 'Comm Pkg Responsible' },
	    area: { label: 'Comm Pkg Area' },
	    phase: { label: 'Comm Pkg Phase' },
	    progress: { label: 'Comm Pkg Progress', getKey: getProgressKey, getColumnSort: sortByNumber },
	    system: { label: 'System' },
	    priority1: { label: 'Commissioning Priority 1' },
	    priority2: { label: 'Commissioning Priority 2' },
	    priority3: { label: 'Commissioning Priority 3' },
        },
    })

```

## Advanced example

## Illustration

![Alt text](./pictures/garden.png 'Illustration')
