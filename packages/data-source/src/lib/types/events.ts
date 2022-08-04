import { DataSourceController } from "../classes";

/**
 * On data changed event callback function
 */
export type OnDataChangedCallback<T, TError> = (data: T[], controller: DataSourceController<T,TError>) => void;
export type OnErrorCallback<TData, TError> = (error: TError, controller: DataSourceController<TData, TError>) => void;