---
title: 'Modules options'
description: 'Lorem ipsum dolor sit amet - 2'
---

## Why do we have modules?

We split the code into modules because we want to lower the bundle size.
Previously we had problems with too big bundle files.
Therefore we use modules. When we use modules, we split the code and separate it from the main application, and imports it when we need it.
In that way we can "trick" the compiler to think the modules is not a part of the application, and the bundle size is lowered.

## How do we implement modules?

You create a standalone module folder, where you place all of your modules, and put all of the logic and UI to every module in there.
Then you import the modules you need and implement it in the `App.tsx` file.

The example below shows `App.tsx`.

```ts
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { powerBiModule } from '@equinor/workspace-fusion/power-bi-module';

// Some module logic ...
// More module logic ...

return (
    // Even more module logic and styling ...
    <Workspace
        contextOptions={contextOptions}
        statusBarOptions={statusBarOptions}
        workspaceOptions={options}
        gridOptions={tabs.includes('grid') ? gridOptions : undefined}
        gardenOptions={tabs.includes('garden') ? gardenOptions : undefined}
        filterOptions={filterOptions}
        sidesheetOptions={sidesheet}
        powerBiOptions={tabs.includes('powerbi') ? powerbiOptions : undefined}
        modules={[gridModule, gardenModule, powerBiModule]}
        dataOptions={{
            getResponseAsync: getResponseAsync,
            queryKey: ['Workspace', shouldFailDataset ? 'true' : 'false'],
        }}
    />;
)
```

As you can see there is a lot of `Options` in Workspace. When we use `gridOptions`, `gardenOptions` or/and `powerBiOptions` we need corresponding modules.
The `Options` and `modules` works together to show the data and UI.

In the example above we've implemented all three options (`gridOptions`, `gardenOptions` and `powerBiOptions`), therefore we also implemented all three modules (`gridModule`, `gardenModule` and `powerBiModule`).
