import { DataSourceController } from '../classes';

/** Function definition for onDataChanged event */
export type OnDataChangedCallback<T, TError> = (data: T[], controller: DataSourceController<T, TError>) => void;
/** Function defintion for OnErrorCallback */
export type OnErrorCallback<TData, TError> = (error: TError, controller: DataSourceController<TData, TError>) => void;
