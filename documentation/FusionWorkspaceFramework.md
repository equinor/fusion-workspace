# Fusion Workspace Framework

[<< BACK](./Readme.md)

Fusion workspace framework, speeding up the development of workspace apps. Allowing the developer to concentrate on business values and rules, not worrying about the underlying functionality orchestration. Its core functions are all provided by the workspace controller, The frameworks purpose id to create a simple way of orchestrating one data-source through a filter and providing the possibility to view. As for now these views are Table and Garden  and power-bi views. These and more views are described at a later point.

Views will include

- Grid View (Ag Grids)
- Table View (React table)
- Garden View
- Power-Bi View

Possible future Views

- Tree View (Core component in garden view)
- Gantt View (New Functionality / view)
- Analytics View (New Functionality / view)

```TS
function workspaceSetup (ws: FusionWorkspaceFramework) {
            ws.addDataSource(() => ({
                dataSource: async (signal?: AbortSignal): Promise<Response> => {
                    const famClient = ws.fusion.httpClient("fam")
                    const { facilityId } = ws.fusion.context;
                    return await famClient.fetch(`api/${facilityId}/tags`);
                },
            })).addTableOptions(tableConfig)
            .addGardenOptions(gardenConfig)
            .addStatusItems(statusBarConfig)
            .addFilterOptions(filterConfig)
};

```

```TS
   const Workspace = useMemo(() => createFusionWorkspaceApp<IData>(workspaceSetup, workspaceOptions, fusion),[framework.context.contextId]);
```
