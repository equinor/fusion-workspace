# ag-grid

The purpose of this ag grid wrapper is to persist viewstate in the controller while the view is unmounted, currently not supported natively by AG-Grid.

## Usage example

```ts
const gridController = new GridController()
gridController.colDefs = [{field: "id"}]

<Grid controller=gridController />
```

## Running unit tests

Run `nx test ag-grid` to execute the unit tests via [Jest](https://jestjs.io).
