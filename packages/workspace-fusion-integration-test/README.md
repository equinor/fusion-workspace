# Testing strategy

## Mission

The mission of integration testing in this lib is to ensure that the external facade of Workspace is intact between changes.
This means that the following functionality is covered by tests and should always work when doing changes.

- [x] Opening sidesheet if `item` queryparam is present.
- [x] Opening the correct tab if `tab` queryparam is present.
- [x] Api calls for garden are called when the garden tab is mounted.
- [x] Api calls for grid are called when the grid tab is mounted.
- [x] KPI api call
- [x] Filter api call
- [x] Search filter retriggers fetch
