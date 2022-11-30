import { BehaviorSubject } from 'rxjs';
import { FilterConfiguration } from '../types';
import { FilterController } from './filterController';

/**
 * React filter controller extends filter controller
 * This filter controller has all the visual/react specific items
 * e.g custom rendering of items
 */
export class ReactFilterController<TData> extends FilterController<TData> {
	constructor(configuration: FilterConfiguration<TData>[]) {
		super();
		this.filterConfiguration = configuration;
	}

	private filterExpanded = new BehaviorSubject(false);

	/**
	 * Is the filter in "quick mode" or "advanced mode"
	 */
	getIsFilterExpanded = () => this.filterExpanded.value;

	/**
	 * Expands or collapses the filter
	 */
	setIsFilterExpanded = (value: boolean) => this.filterExpanded.next(value);

	/**
	 * Register a function to be called upon when filter expands or collapses
	 */
	filterExpanded$ = this.filterExpanded.asObservable();

	/**
	 * Filter configuration groups
	 */
	override filterConfiguration: FilterConfiguration<TData>[] = [];
}
