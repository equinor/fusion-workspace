import { defaultResponseParser } from '../Functions';

export type FetchResponseAsync = (signal?: AbortSignal) => Promise<Response>;
export type ResponseParserAsync<T> = (Response: Response) => Promise<T[]>;

type OnDataChangedCallback<T> = (data: T[], controller: DataSourceController<T>) => void;

interface Callback<T> {
    callback: T;
    id: string;
}

interface OnCallbackSet<T> {
    id: string;
    unsub: () => void;
    controller: DataSourceController<T>;
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

    onDataChanged = (cb: OnDataChangedCallback<T>): OnCallbackSet<T> => {
        const id = generateUniqueId();
        this.onDataChangedCallbacks.push({ id, callback: cb });
        return {
            id,
            unsub: () => {
                this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter(
                    (callback) => callback.id !== id
                );
            },
            controller: this,
        };
    };
}

function generateUniqueId(): string {
    return (Math.random() * 16).toString();
}
