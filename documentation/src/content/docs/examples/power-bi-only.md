---
title: 'PowerBi only'
description: 'Lorem ipsum dolor sit amet - 2'
---

## Introduction

This example is very basic.
It shows the configuration needed to make a PowerBi workspace

### Requirements

The following example will have the following functionality configured.

1. PowerBi

### Configuration

```tsx
import { Workspace } from '@equinor/workspace-fusion'
import { PowerBiConfig, EmbedConfiguration, FusionPowerBiToken } from '@equinor/workspace-fusion/power-bi';
import { powerBiModule } from '@equinor/workspace-fusion/power-bi-module';

const pbi: PowerBiConfig = {
    getEmbed: async (reportUri: string, _token: string, signal?: AbortSignal): Promise<EmbedConfiguration> => {
        const res = await fetch(`someResource/${reportUri}`, { signal });
        if(!res.ok){
            throw new Error("",{ cause: res })
        }
        return res.json();
    },
    getToken: async (reportUri: string, signal?: AbortSignal): Promise<FusionPowerBiToken> => {
        const res = await fetch(`someResource/${reportUri}`, { signal });
        if(!res.ok){
            throw new Error("",{ cause: res })
        }
        return res.json();
    },
    getErrorMessage: async (): Promise<string> => "Oops something went wrong",
    getClassification: async (reportUri: string, signal) => fetch(`reportinfo/${reportUri}`, {signal}).text();
}

function App() {
    return (
        <Workspace
            workspaceOptions={{
                appKey: 'powerbi workspace',
                getIdentifier: () => '',
            }}
            modules={[powerBiModule]}
            powerBiOptions={pbi}
        />;
    )
}
```
