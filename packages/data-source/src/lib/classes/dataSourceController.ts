
import { defaultResponseParser, generateUniqueId } from '../functions';
import { FetchResponseAsync, OnDataChangedCallback, ResponseParserAsync } from '../types';
import { Callback, OnCallbackSet } from '../types/callback';

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

    /**
     * Fetches data asynchronously and adds it to the data attribute on the controller
     * @param preventCallbacks
     * @returns 
     */
    fetchData = async (preventCallbacks?: boolean): Promise<T[]> => {
        const res = await this.fetchResponseAsync();
        const data = await this.responseParserAsync(res);

        this.data = data;

        if (!preventCallbacks) {
            this.onDataChangedCallbacks.forEach(({ callback }) => callback(data, this));
        }
        return data;
    };


    /**
     * Removes the data
     */
    remove = (): void => {
        this.data = [];
        this.onDataChangedCallbacks.forEach(({callback}) => callback([], this))
    }


    /**
     * Register a callback to be called whenever data changes
     * @param cb 
     * @returns 
     */
    onDataChanged = (cb: OnDataChangedCallback<T>): OnCallbackSet => {
        const id = generateUniqueId();
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


}
