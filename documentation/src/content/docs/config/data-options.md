---
title: 'Data options'
description: 'Lorem ipsum dolor sit amet - 2'
---

## Configuration

Data fetching in Workspace is handled by [Tanstack Query](https://tanstack.com/query/latest) internally. Some of the config will resemble the query mindset.

### QueryKey

Same as in [Tanstack Query](https://tanstack.com/query/latest).
In the example below the query will automatically refetch when `contextId` changes.

```ts
/**
 * @example - queryKey
 */
let contextId = '123';
const queryKey = ['workspace', contextId];
```

### Get response async

Function for getting a response object from the server.
In the example below we make a fetch call and a response is returned.
Workspace will automatically check the res.status, to determine whether throwing an error is necessary.

```ts
/**
 * @example - getResponseAsync
 */
const getResponseAsync = () => fetch('example.com');
```

### Response parser (optional)

It's only necessary to pass this if you want to perform some calculations or transformations to the data.
If all you do is res.json(), then just omit the argument.

```ts
/**
 * @example - responseParser
 */
//Dont do this!
const responseParser = (res) => res.json();

//do this
const responseParser = async (res) => {
  const data = await res.json();
  return data.map((s) => s.id * 2);
};
```

### Initial data

Same as in [Tanstack Query](https://tanstack.com/query/latest).
If you are just getting started this property can be used to avoid fetching and just declaring data as a local variable.

```ts
/**
 * @example - initialData
 */
const initialData = [{ id: '123' }];
```
