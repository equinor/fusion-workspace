# Data Source Controllers

A data source controller handles the first load of the data for the workspace. A workspace can handle any data Array, the default Data source controller handles fetch calls and parses the response by default or with the optional `responseParser`. Default DataSource interface can be seen below.

```TS
    export interface DataSource<T> {
        responseAsync: (signal?: AbortSignal) => Promise<Response>;
        responseParser?: (Response: Response) => Promise<T[]>;
    }
```

A data source controller implements `fetchData` and `onDataChange` event that is called every time data is parsed successfully and all controllers subscribed to this controller will update accordingly. The simplest way of data source controller should look something like this:

```TS
    export class DataSourceController<T> {
        dataSource: () => T[];
        data: T[] = [];
        onDataChangedCallbacks: Callback<OnDataChangedCallback<T>>[] = [];

        constructor(fetch: DataSourceFunction) {
            this.dataSource = fetch;
        }

        fetchData = async (preventCallbacks?: boolean): Promise<T[]> => {
            this.data = = await this.dataSource();

            if (!preventCallbacks) {
                this.onDataChangedCallbacks.forEach(({ callback }) => callback(data, this));
            }
            return data;
        };

        onDataChanged = (cb: OnDataChangedCallback<T>): OnCallbackSet<T> => {
            const id = generateUniqueId();
            this.onDataChangedCallbacks.push({ id, callback: cb });
            return {
                id,
                unsubscribe: () => {
                    this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter(
                        (callback) => callback.id !== id
                    );
                },
                controller: this,
            };
        };
    }

```
