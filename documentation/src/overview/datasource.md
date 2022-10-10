---
title: Data source
category: App Development
tags:
    - development
    - app
---

## Concept

The goal of datasource is to simplify data fetching by removing the need for checking status codes and parsing errors.

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
