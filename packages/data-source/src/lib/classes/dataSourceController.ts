
import { defaultResponseParser } from '../functions';
import { Callback, OnCallbackSet } from '../types/dataSource';

export type FetchResponseAsync = (signal?: AbortSignal) => Promise<Response>;
export type ResponseParserAsync<T> = (Response: Response) => Promise<T[]>;

type OnDataChangedCallback<T> = (data: T[], controller: DataSourceController<T>) => void;
export interface DataSourceConfig<TData> {
    dataSource: FetchResponseAsync;
    dataMapper?: ResponseParserAsync<TData>;
}
export interface DataSource<T> {
    responseAsync: (signal?: AbortSignal) => Promise<Response>;
    responseParser?: (Response: Response) => Promise<T[]>;
}

export class DataSourceController<T> {
    /** Function that returns the api call promise */
    fetchResponseAsync: FetchResponseAsync;
    /** Function that parses the response to correct format, defaults to just parsing the raw response */
    responseParserAsync: ResponseParserAsync<T> = defaultResponseParser;
    data: T[] = [];
    onDataChangedCallbacks: Callback<OnDataChangedCallback<T>>[] = [];

    constructor(fetch: FetchResponseAsync) {
        this.fetchResponseAsync = fetch;
    }

    fetchData = async (preventCallbacks?: boolean): Promise<T[]> => {
        const res = await this.fetchResponseAsync();
        const data = await this.responseParserAsync(res);

        this.data = data;

        if (!preventCallbacks) {
            this.onDataChangedCallbacks.forEach(({ callback }) => callback(data, this));
        }
        return data;
    };

    onDataChanged = (cb: OnDataChangedCallback<T>): OnCallbackSet => {
        const id = this.generateUniqueId();
        this.onDataChangedCallbacks.push({ id, callback: cb });
        return {
            id,
            unSubscribe: () => {
                this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter(
                    (callback) => callback.id !== id
                );
            },
        };
    };

    private generateUniqueId(): string {
        return (Math.random() * 16).toString();
    }
}
