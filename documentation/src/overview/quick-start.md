---
title: Quick Start
category: App Development
tags:
    - development
    - app
---

## Example

```TS
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react';

export function App(){
    const controller = useMemo(() => {
        return createFusionWorkspace<Handover>({ appKey: 'Handover', getIdentifier: (item) => item.commpkgNo }, (builder) =>
		builder
			.addDataSource({
				getResponseAsync: async (signal) =>
					await client.fetch(
						'https://pro-s-dataproxy-ci.azurewebsites.net/api/contexts/94dd5f4d-17f1-4312-bf75-ad75f4d9572c/handover',
						{ signal }
					),
			})
			.addGrid(gridOptions)
			.addConfig({
				appColor: 'purple',
				appKey: 'My awesome app',
				defaultTab: 'grid',
			})
			.addStatusBarItems(statusBar)
    },[])

return <Workspace controller={controller} />
}
```
