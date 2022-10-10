---
title: Status bar
category: App Development
tags:
    - development
    - app
---

## Concept

The status bar is designed for visualizing key measures from the data. Status bar items re-calculates everytime the filter is modified.

## Example

```TS
.addStatusBar((data) => [
    { title: 'Total CP', value: data.reduce((prev) => prev + 1, 0) },
	{ title: 'RFO Accepted', value: data.reduce((prev, curr) => prev + (curr.rfocIsAccepted ? 1 : 0), 0) }
    ])
```

## Illustration

![Alt text](./pictures/status_bar.png 'Illustration')
