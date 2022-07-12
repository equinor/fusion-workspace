# Fusion Workspace App

[<< BACK](../Readme.md)
## App mounding Loading sequence

... Some text here.

```mermaid
sequenceDiagram   
    participant User
    participant Portal
    participant Workspace

    User->>Portal: User Opens web Portal.
    Note over Portal: Setup Fusion Framework Modules
    Portal ->> User: Asks user for username and password
    User->> Portal: Login
    Note over Portal: User Logged inn waiting for user input
   
    User ->> Portal:  Click on app link
    Portal ->> Workspace: Request Workspace App Files
    Note over Workspace: Setup App Modules and <br> combines Framework Modules
    Workspace ->> Portal: Mounts Workspace application
    Note over Workspace: No Context is selected
    Workspace->> User: Asks user to select context
    Note over User: User selects a context <br> in det context picker
    User->> Portal: Selects context
    Portal ->> Workspace: Portal provides context to Workspace
    Note over Workspace: Start Workspace setup
    Note over Workspace: Mounts Workspace Component

```

## How it works

todo add text here

## Create Workspace App

To Create a fusion app its simple. the following code examples will describe the initial tough on how this should look.
The `createFusionWorkspaceApp` takes in a setup function, config and the `Fusion` object created by fusion and app module config.

> The `useFusionWorkspaceContext` will wrap `useFramework`, `useCurrentUser`and `useModuleContext` Hooks.

```TS
    export const useFusionWorkspaceContext = () => {
        const framework = useFramework();
        const modules = useModuleContext();
        const account = useCurrentUser();
        return {...framework, ...modules, ...account}
    }
```

`useFusionWorkspaceContext` will be used in the creation off a Workspace application as shown below, the following code snippet is the main setup of the workspace application.

```TS

const workspaceOptions: FusionWorkspaceOptions<IData> = {
    objectId: "id"
}

function workspaceSetup<IData>(ws: FusionWorkspaceFramework<IData>) {
            ws.configure(workspaceOptions)
            .addDataSource(() => ({
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


export const WorkspaceAppComponent = () => {
    const fusion = useFusionWorkspaceContext()
    const Workspace = useMemo(() => createFusionWorkspaceApp<IData>(workspaceSetup, fusion),[framework.context.contextId]);

    return (
        <>
            { framework.context.contextId ? <Workspace /> :  <ContextSelector/> }
        </>
    );
};
```

The `WorkspaceAppComponent` is the used in the `createApp` bootstrapping everything with component modules and fusion framework.

```TS
import iModule, { IModule } from '@equinor/fusion-IModule';
import createWorkspaceApp { AppConfigurator } from '@equinor/fusion-workspace';
import { WorkspaceAppComponent } from "./WorkspaceAppComponent"

const configCallback: AppConfigurator<[IModule]> = async (appModuleConfig, frameworkApi) => { 
    await frameworkApi.modules.serviceDiscovery.configureClient('fam', appModuleConfig);
};


export const configurator = createApp(WorkspaceAppComponent, configCallback, [moduleAgrGrid]);

export const App = () => {
    const framework = useFramework();
    const Component = configurator(framework, {});
    return (
        <Suspense fallback={<StarProgress text="Loading Application" />}>
            <Component />
        </Suspense>
    );
};

export default App;
```
