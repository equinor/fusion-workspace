---
title: 'Advanced configuration (DRAFT)'
description: 'Lorem ipsum dolor sit amet - 2'
---

## Introduction

This example is very basic.
It shows the bare minimum of configuration needed to get a meaningful workspace.

### Requirements

The following example will have the following functionality configured.

1. Data fetching
2. Grid
3. Garden
4. PowerBi
5. Sidesheet

### Configuration

```js
import { Workspace } from '@equinor/workspace-fusion'
import { GridConfig } from '@equinor/workspace-fusion/grid'
import { GardenConfig } from '@equinor/workspace-fusion/garden'
import { DataConfig } from '@equinor/workspace-fusion/data-source'
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet'
import { PowerBiConfig } from '@equinor/workspace-fusion/power-bi';
import { FilterConfig } from '@equinor/workspace-fusion/filter'
import { powerBiModule } from '@equinor/workspace-fusion/power-bi-module';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { gridModule } from '@equinor/workspace-fusion/grid-module';

type Person = {
    name: string;
    age: number;
}

/**
 * TIP: Export all the config from a workspaceConfig.ts
 */

const dataOptions: DataConfig<Person> = {
    initialData: [{name: "John Doe", age: 34}]
}

const gridOptions: GridConfig<Person> = {
    colDefs: [
        { field: "name" },
        { field: "age" }
    ]
}

const gardenOptions: GardenConfig<Person> = {
    initialGrouping: {
        horizontalGroupingAccessor: 'name',
        verticalGroupingKeys: [],
    },
    getDisplayName: (person) => person.name,
    fieldSettings: {
        name: { label: 'Name' },
        age: { label: 'Age' },
    },
};

function App() {
    return (
        <Workspace
            dataOptions={dataOptions}
            gridOptions={gridOptions}
            gardenOptions={gardenOptions}
            modules={[powerBiModule, gardenModule, gridModule]}
            sidesheetOptions={sidesheet}
        />;
    )
}
```
