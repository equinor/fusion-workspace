import { FilterController } from '../classes';
import { FilterGroup } from './filter';

/**
 * Callback to be fired when filter data changes
 */
export type OnFilterDataChangeCallback<TData> = (
  data: TData[],
  controller: FilterController<TData>
) => void;

/**
 * Callback to be fired when filter state changes
 */
export type OnFilterStateChangedCallback<T> = (
  newFilterState: FilterGroup[],
  controller: FilterController<T>
) => void;
