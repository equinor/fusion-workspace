import { FilterConfiguration, ValueFormatterFilter } from '../types';
import { FilterController } from './filterController';
import { Observable, OnchangeCallback } from './observable';

/**
 * React filter controller extends filter controller
 * This filter controller has all the visual/react specific items
 * e.g custom rendering of items
 */
export class ReactFilterController<TData> extends FilterController<TData> {
  constructor(groups?: FilterConfiguration<TData>[]) {
    super();
    groups && this.addGroups(groups);
    const filterExpanded = new Observable(this.isFilterExpanded);
    this.onFilterExpandedChange = filterExpanded.onchange;
    this.setIsFilterExpanded = filterExpanded.setValue;
    filterExpanded.onchange((val) => {
      this.isFilterExpanded = val;
    });
  }

  /**
   * Is the filter in "quick mode" or "advanced mode"
   */
  isFilterExpanded = false;

  /**
   * Expands or collapses the filter
   */
  setIsFilterExpanded: (value: boolean) => void;

  /**
   * Register a function to be called upon when filter expands or collapses
   */
  onFilterExpandedChange: (callback: OnchangeCallback<boolean>) => () => void;

  /**
   * Filter configuration groups
   */
  groups: FilterConfiguration<TData>[] = [];

  /**
   * Add filter configuration groups
   */
  addGroups = (groups: FilterConfiguration<TData>[]) => {
    const valueFormatters = groups.map((s): ValueFormatterFilter<TData> => ({ ...s }));
    this.addValueFormatters(valueFormatters);
    this.groups = groups;
  };
}
