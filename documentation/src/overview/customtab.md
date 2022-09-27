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
const Chart = () => {
	const { dataService } = useWorkspace();

	if (!dataService.filteredData) {
		return <div></div>;
	}

	return (
		<SomeChartComponent data={dataService.filteredData} />
	);
};

createFusionWorkspace()
.addCustomTab({
        Component: Chart,
		TabIcon: () => <div>Chart</div>,
		name: "Chart",
})
```

## Advanced example

Your custom tab can be fully integrated with the other tabs in the workspace

```TS

```
