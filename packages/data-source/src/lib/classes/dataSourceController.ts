
import { defaultResponseParser, generateUniqueId } from '../functions';
import { FetchResponseAsync, OnDataChangedCallback, OnErrorCallback, ResponseParserAsync } from '../types';
import { Callback, OnCallbackSet } from '../types/callback';

export class DataSourceController<TData, TError = unknown> {
    /** Function that returns the api call promise */
    fetchResponseAsync: FetchResponseAsync;
    /** Function that parses the response to correct format, defaults to just parsing the raw response */
    responseParserAsync: ResponseParserAsync<TData> = defaultResponseParser;
    data: TData[] = [];
    private onDataChangedCallbacks: Callback<OnDataChangedCallback<TData, TError>>[] = [];
    private onErrorCallbacks: Callback<OnErrorCallback<TData, TError>>[] = []

    constructor(fetch: FetchResponseAsync) {
        this.fetchResponseAsync = fetch;
    }

    /**
     * Fetches data asynchronously and adds it to the data attribute on the controller
     * @param preventCallbacks
     * @returns 
     */
    fetchData = async (preventCallbacks?: boolean): Promise<TData[]> => {
        /**
         * Add try catch and error slot
         */
        try{
            const res = await this.fetchResponseAsync();
            const data = await this.responseParserAsync(res);
            this.data = data;
            if (!preventCallbacks) {
                this.notifyDataChanged();
            }
            return data;

        }catch(e: unknown){
            this.throwError(e as TError)
        }

        return [];
    };

    /**
     * Function for setting error and notifying subscribers
     * @param error
     */
    private throwError(error: TError){
        this.onErrorCallbacks.forEach(({callback}) => callback(error, this))

    }

    /**
     * Calls the callbacks to let the subscribers know data has changed
     */
    private notifyDataChanged(){
        this.onDataChangedCallbacks.forEach(({callback}) => callback(this.data, this))
    }

    /**
     * Removes the data
     */
    remove = (): void => {
        this.data = [];
        this.notifyDataChanged();
    }

    /**
     * Register a callback to be called whenever data changes
     * @param cb 
     * @returns 
     */
    onDataChanged = (cb: OnDataChangedCallback<TData, TError>): OnCallbackSet => {
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
    

    onErrorThrown = (cb: OnErrorCallback<TData,TError>): OnCallbackSet => {
        const id = generateUniqueId();
        this.onErrorCallbacks.push({callback: cb, id});
        return {
            id,
            unSubscribe: () => {
                this.onErrorCallbacks = this.onErrorCallbacks.filter((s) => s.id !== id)
            }
        }
    }


}
