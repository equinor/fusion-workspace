---
title: Custom tab
category: App Development
tags:
    - development
    - app
---

## Concept

Every app is unique in it's own way, and sometimes the provided functionality is not enough. That's what custom tabs are for! Below is two examples of different complexity.

## Basic example

Adding a custom tab to your workspace.

```TS
function CustomTab(){
//Use useWorkspace hook to access workspace state
const {dataService: {filteredData}} = useWorkspace();
return (
    <div>
        {filteredData.length}
    </div>
)
}
createFusionWorkspace()
.addCustomTab({
        Component: CustomTab,
		TabIcon: () => <div>Custom tab</div>,
		CustomHeader: undefined,
		name: "Custom tab",
})

```

## Advanced example

Your custom tab can be fully integrated with the other tabs in the workspace

```TS

```
