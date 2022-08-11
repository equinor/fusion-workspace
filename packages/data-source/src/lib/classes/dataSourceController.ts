import { generateUniqueId } from '../utils';
import {
  FetchDataAsync,
  OnDataChangedCallback,
  OnErrorCallback,
  OnCallbackSet,
  Callback,
} from '../types';

export class DataSourceController<TData, TError = unknown> {
  private fetchData: FetchDataAsync<TData>;
  data: TData[] = [];
  private onDataChangedCallbacks: Callback<
    OnDataChangedCallback<TData, TError>
  >[] = [];
  private onErrorCallbacks: Callback<OnErrorCallback<TData, TError>>[] = [];

  constructor(fetch: FetchDataAsync<TData>) {
    this.fetchData = fetch;
  }

  /**
   * Fetches data asynchronously and adds it to the data attribute on the controller
   * @param preventCallbacks If set to true will not notify subscribers that data changed, should not be used
   * @returns
   */
  fetch = async (preventCallbacks?: boolean): Promise<TData[]> => {
    /**
     * Add try catch and error slot
     */
    try {
      const data = await this.fetchData();
      this.data = data;
      if (!preventCallbacks) {
        this.notifyDataChanged();
      }
      return data;
    } catch (e: unknown) {
      this.throwError(e as TError);
    }

    return this.data;
  };

  private throwError(error: TError) {
    this.onErrorCallbacks.forEach(({ callback }) => callback(error, this));
  }

  /**
   * Calls the callbacks to let the subscribers know data has changed
   */
  private notifyDataChanged() {
    this.onDataChangedCallbacks.forEach(({ callback }) =>
      callback(this.data, this)
    );
  }

  /**
   * Removes the data
   */
  remove = (): void => {
    this.data = [];
    this.notifyDataChanged();
  };

  /**
   * Register a callback to be called whenever data changes
   * @param cb The function to be called upon whenever data changes
   * @returns The id assigned to the callback(debug purposes), and a function to unsubscribe
   */
  onDataChanged = (cb: OnDataChangedCallback<TData, TError>): OnCallbackSet => {
    const id = generateUniqueId();
    this.onDataChangedCallbacks.push({ id, callback: cb });
    return {
      id,
      unsubscribe: () => {
        this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter(
          (callback) => callback.id !== id
        );
      },
    };
  };

  /**
   * Register a callback to be called whenever an error is thrown
   * @param cb The function to be called upon whenever an error is thrown
   * @returns The id assigned to the callback(debug purposes), and a function to unsubscribe
   */
  onErrorThrown = (cb: OnErrorCallback<TData, TError>): OnCallbackSet => {
    const id = generateUniqueId();
    this.onErrorCallbacks.push({ callback: cb, id });
    return {
      id,
      unsubscribe: () => {
        this.onErrorCallbacks = this.onErrorCallbacks.filter(
          (s) => s.id !== id
        );
      },
    };
  };
}
