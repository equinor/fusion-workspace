import { FilterConfiguration, ValueFormatterFilter } from '../types';
import { FilterController } from './filterController';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * React filter controller extends filter controller
 * This filter controller has all the visual/react specific items
 * e.g custom rendering of items
 */
export class ReactFilterController<TData> extends FilterController<TData> {
	constructor(groups?: FilterConfiguration<TData>[]) {
		super();
		groups && this.addGroups(groups);
	}

	#filterExpanded$ = new BehaviorSubject(false);

	isFilterExpanded$ = this.#filterExpanded$.asObservable().pipe(distinctUntilChanged());

	getIsFilterExpanded = () => this.#filterExpanded$.value;

	/**
	 * Expands or collapses the filter
	 */
	setIsFilterExpanded = (value: boolean) => this.#filterExpanded$.next(value);

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
