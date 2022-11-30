import { doesItemPassFilter, filterGroupExists, generateFilterValues } from '../utils';

import { FilterConfiguration, FilterGroup, FilterItemCount, FilterSearchActive, FilterValueType } from '../types';
import { CountController } from './countController';
import { CountCache } from './countCache';
import { BehaviorSubject, skip } from 'rxjs';

export class FilterController<TData> {
	/** The data to calculate the filter from */
	data$ = new BehaviorSubject<TData[] | undefined>(undefined);
	/** The filtered data */
	filteredData$ = new BehaviorSubject<TData[] | undefined>(undefined);
	/** All possible filter values based on value formatters */
	filterGroups$ = new BehaviorSubject<FilterGroup[] | undefined>(undefined);
	/** An array of unchecked values */
	currentFilterState$ = new BehaviorSubject<FilterGroup[]>([]);
	/** The current search */
	private search$ = new BehaviorSubject<FilterSearchActive<TData> | undefined>(undefined);
	/** The filter configuration */
	filterConfiguration: FilterConfiguration<TData>[] = [];

	private countController = new CountController<TData>();

	private countCache = new CountCache();

	private initChangeHandlers = () => {
		/** Re-filter if filter values change */
		this.filterGroups$.subscribe((s) => {
			if (s) {
				this.filter();
			}
		});

		this.currentFilterState$.subscribe((s) => {
			if (s) {
				this.filter();
			}
		});

		this.data$.subscribe((data) => {
			/**Only do this if you have data */
			if (data && data.length > 0) {
				this.filterGroups$.next(generateFilterValues(this.filterConfiguration, data));
			}
		});
	};

	constructor() {
		this.initChangeHandlers();
	}

	setFilterState = (groups: FilterGroup[]) => this.currentFilterState$.next(groups);

	setSearch = (search: FilterSearchActive<TData>) => {
		this.search$.next(search);
	};
	clearSearch = () => this.search$.next(undefined);

	/** Returns all the filtervalues from a given group */
	getGroupValues = (groupName: string) =>
		ensureFilterGroups(this.filterGroups$.value).find((s) => s.name === groupName)?.values ?? [];

	private filter = () => {
		if (!this.data$.value) return;

		if (this.currentFilterState$.value.length === 0) {
			this.filteredData$.next(this.data$.value);
			return;
		}

		this.filteredData$.next(
			ensureData(this.data$.value).filter((item) =>
				doesItemPassFilter(item, this.currentFilterState$.value, this.filterConfiguration)
			)
		);

		// if (this.searchController.filterSearch !== null) {
		// 	this.setFilteredData(this.searchController.handleSearch(this.data, this.filteredData) ?? []);
		// }
	};

	getFilterItemCountsForGroup = (groupName: string): FilterItemCount[] => {
		const group = ensureFilterGroups(this.filterGroups$.value).find((s) => s.name === groupName);
		const valueFormatter = this.filterConfiguration.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');
		const count = this.countController.getFilterItemCountsForGroup(
			group,
			valueFormatter,
			ensureFilteredData(this.filteredData$.value)
		);

		return count;
	};

	getCountForFilterValue = (groupName: string, filterItem: FilterValueType): number => {
		const cached = this.countCache.getCount(`${groupName}${filterItem}`);

		if (cached) {
			return cached;
		}
		const group = ensureFilterGroups(this.filterGroups$.value).find((s) => s.name === groupName);
		const valueFormatter = this.filterConfiguration.find((s) => s.name === groupName)?.valueFormatter;
		if (!group || !valueFormatter) throw new Error('Group or valueformatter does not exist');

		const count = this.countController.getCountForFilterValue(
			group,
			filterItem,
			valueFormatter,
			ensureFilteredData(this.filteredData$.value)
		);
		this.countCache.addCount(`${groupName}${filterItem}`, count);
		return count;
	};

	/**
	 * Check if a value is currently being filtered out from the dataset
	 * e.g visual checkboxes uses this function to know whether to be checked or not
	 */
	checkValueIsInactive = (groupName: string, value: FilterValueType) =>
		Boolean(this.currentFilterState$.value.find(({ name }) => name === groupName)?.values.includes(value));

	/**
	 * Get all the values that are currently being filtered out from a specific group
	 * e.g used for checking if a group has any active filters
	 */
	getInactiveGroupValues = (groupName: string) =>
		this.currentFilterState$.value.find(({ name }) => name === groupName)?.values ?? [];

	/**
	 * add or remove a filtevalue from the list of values currently being excluded from the filtered data
	 * Called when clicking a checkbox
	 */
	changeFilterItem = (action: 'MarkInactive' | 'MarkActive', groupName: string, newValue: FilterValueType) => {
		const newState = this.currentFilterState$.value;
		if (filterGroupExists(groupName, this.currentFilterState$.value)) {
			/**
			 * Group exists add or remove
			 */
			const group = this.currentFilterState$.value.find(({ name }) => name === groupName);
			if (!group) return;
			group.values =
				action === 'MarkInactive'
					? [...group.values, newValue]
					: [...group.values.filter((value) => value !== newValue)];
		} else {
			if (action === 'MarkActive') return;
			/** only add */
			newState.push({ name: groupName, values: [newValue] });
		}
		this.currentFilterState$.next(newState);
	};

	/**
	 * Add or remove all values in a filter group
	 * e.g Clear active filters on one specific group
	 */
	markAllValuesActive = (groupName: string) => {
		const group = this.currentFilterState$.value.find(({ name }) => name === groupName);
		if (!group) return;
		this.currentFilterState$.next(this.currentFilterState$.value.filter(({ name }) => name !== groupName));
	};

	/** Clears all active filters */
	clearActiveFilters = () => this.currentFilterState$.next([]);

	/** Call this function when mediator should be destroyed */
	destroy = () => {
		for (const key in this) {
			this[key] = null as unknown as this[Extract<keyof this, string>];
			delete this[key];
		}
	};
}

const ensureFilteredData = <TData>(filteredData: TData[] | undefined, message?: string): TData[] => {
	if (!filteredData) {
		throw new Error(message ?? 'No filtered data');
	}
	return filteredData;
};

const ensureFilterGroups = (filterGroups: FilterGroup[] | undefined, message?: string): FilterGroup[] => {
	if (!filterGroups) {
		throw new Error(message ?? 'No filter groups');
	}
	return filterGroups;
};

const ensureData = ensureFilteredData;
