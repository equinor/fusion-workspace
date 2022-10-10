---
title: Data source
category: App Development
tags:
    - development
    - app
---

## Concept

## Example

Fetches data from server and will automatically parse it as json;

```TS
.addDataSource({
				getResponseAsync: async (signal) =>
					await client.fetch(
						"cats.com",
						{ signal }
					),
			})
```

With response parser

```TS
.addDataSource({
				getResponseAsync: async (signal) =>
					await client.fetch(
						"cats.com",
						{ signal }
					),
                    responseParser: async(res) => {
                        const data = await res.json();
                        //transform data?
                        return data;
                    }
			})


```
