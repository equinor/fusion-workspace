import { FilterGroup, FilterValueType } from '../types';
import { filterGroupExists } from '../utils';
import { Observable, OnchangeCallback } from './observable';

export class FilterStateController {
	filterState: FilterGroup[] = [];

	/**
	 * Manually set the filter state
	 */
	setFilterState: (value: FilterGroup[]) => void;

	/**
	 * Register callback to be called when filter state changes
	 */
	onFilterStateChange: (callback: OnchangeCallback<FilterGroup[]>) => () => void;

	constructor() {
		const { onchange, setValue } = new Observable<FilterGroup[]>([]);
		this.setFilterState = setValue;
		this.onFilterStateChange = onchange;
		onchange((val) => (this.filterState = val));
	}

	/**
	 * Check if a value is currently being filtered out from the dataset
	 * e.g visual checkboxes uses this function to know whether to be checked or not
	 */
	checkValueIsInactive = (groupName: string, value: FilterValueType) =>
		Boolean(this.filterState.find(({ name }) => name === groupName)?.values.includes(value));

	/**
	 * Get all the values that are currently being filtered out from a specific group
	 * e.g used for checking if a group has any active filters
	 */
	getInactiveGroupValues = (groupName: string) =>
		this.filterState.find(({ name }) => name === groupName)?.values ?? [];

	/**
	 * add or remove a filtevalue from the list of values currently being excluded from the filtered data
	 * Called when clicking a checkbox
	 */
	changeFilterItem = (action: 'MarkInactive' | 'MarkActive', groupName: string, newValue: FilterValueType) => {
		if (filterGroupExists(groupName, this.filterState)) {
			/**
			 * Group exists add or remove
			 */
			const group = this.filterState.find(({ name }) => name === groupName);
			if (!group) return;
			group.values =
				action === 'MarkInactive'
					? [...group.values, newValue]
					: [...group.values.filter((value) => value !== newValue)];
		} else {
			if (action === 'MarkActive') return;
			/** only add */
			this.filterState.push({ name: groupName, values: [newValue] });
		}
		this.setFilterState(this.filterState);
	};

	/**
	 * Add or remove all values in a filter group
	 * e.g Clear active filters on one specific group
	 */
	markAllValuesActive = (groupName: string) => {
		const group = this.filterState.find(({ name }) => name === groupName);
		if (!group) return;
		this.setFilterState(this.filterState.filter(({ name }) => name !== groupName));
	};

	/** Clears all active filters */
	clearActiveFilters = () => {
		this.setFilterState([]);
	};
}
