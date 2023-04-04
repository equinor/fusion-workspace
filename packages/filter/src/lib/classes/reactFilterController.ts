import { FilterConfiguration, ValueFormatterFilter } from '../types';
import { FilterStateController } from './filterStateController';
import { Observable, OnchangeCallback } from './observable';

/**
 * React filter controller extends filter controller
 * This filter controller has all the visual/react specific items
 * e.g custom rendering of items
 */
export class ReactFilterController<TData> extends FilterStateController {
  constructor() {
    super();
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
}
