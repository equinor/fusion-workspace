# Table

Component to display data in a tabular view. The component only needs a data object and columns object in order to display a default view.
It is possible to configure different properties of the component such as hidden columns, custom cells and custom columns.
The component support grouping and sorting, however if the value of the cell is not a primitive, the component will need a group by function that handles this. Use `defaultGroupByFn` from this package and pass it to the Table component like: `options: {{groupByFn: defaultGroupByFn}}`.

### objectIdentifierKey

Required

### onCellClick

Optional. Adds click handlers to all cells. Accepts two parameters; The cell and MouseEvent.

### enableSelectRows

Optional. Set to `true` to enable checkboxes.

### hiddenColumns

Optional. Hide columns

### headers

Optional. Change default title of headers

### customCellView

Optional. Change default cell view to either predefined cell views or custom cell view.

### customColumns

Optional. Add custom columns to the table, i.e. computed columns

### columnOrder

Optional. Decide the order of columns displayed. The array has to contain id strings equal to column id.

## Example usage

```ts
commPkg.registerTableOptions({
    objectIdentifierKey: 'tagNo',
    onCellClick: (a, b) => {
        b.stopPropagation();
        alert('ho');
    },
    enableSelectRows: false,
    hiddenColumns: ['functionTags', 'signedAt', 'commPk'],
    columnOrder: ['formType', 'createdAt'],
    headers: [
        { key: 'formType', title: 'Form' },
        { key: 'createdAt', title: 'Created Date' },
    ],
    customCellView: [
        {
            key: 'createdAt',
            type: 'Date',
        },
        {
            key: 'description',
            type: 'Description',
        },

        {
            key: 'status',
            type: 'Status',
            cellAttributeFn: (content) => {
                let bgcolor = '';

                if (content.status === 'OK') {
                    bgcolor = 'green';
                } else if (content.status === 'OS') {
                    bgcolor = 'blue';
                } else if (content.status === 'PA') {
                    bgcolor = 'red';
                } else {
                    bgcolor = 'yellow';
                }

                return {
                    style: {
                        backgroundColor: bgcolor,
                        color: bgcolor === 'blue' ? 'white' : 'black',
                    },
                };
            },
        },
        {
            key: 'formType',
            type: {
                Cell: ({ cell }) => {
                    return <div style={{ fontWeight: 500 }}>{cell.row.original.formType as string}</div>;
                },
            },
        },
    ],
    customColumns: [
        {
            Header: 'Foo',
            accessor: (row) => {
                return row['contentChecklists'].length + 1;
            },
            Cell: () => {
                return <div>im a cell</div>;
            },
            aggregate: 'count',
            Aggregated: (cell) => {
                return <div>{cell.value}</div>;
            },
        },
    ],
});
```

```tsx
export const ListTab = () => {
    const { data } = useFilteredData<TableData>();
    const { tableOptions, setSelected } = useDataContext();
    const columns = useColumns(data[0], {
        customCellView: tableOptions?.customCellView,
        headers: tableOptions?.headers,
        customColumns: tableOptions?.customColumns,
    });
    const hiddenCols = tableOptions?.hiddenColumns === undefined ? [] : tableOptions.hiddenColumns;
    return (
        <Wrapper>
            <Table<TableData>
                options={{
                    data,
                    columns,
                    enableSelectRow: tableOptions?.enableSelectRows,
                    onCellClick: tableOptions?.onCellClick,
                    initialState: {
                        hiddenColumns: hiddenCols,
                    },
                    setSelected,
                    groupByFn: defaultGroupByFn,
                    columnOrder: talbeOptions?.columnOrder,
                }}
                FilterComponent={PopupFilter}
            />
        </Wrapper>
    );
};
```
