import { DataSourceController } from "../classes";

/**
 * On data changed event callback function
 */
export type OnDataChangedCallback<T> = (data: T[], controller: DataSourceController<T>) => void;