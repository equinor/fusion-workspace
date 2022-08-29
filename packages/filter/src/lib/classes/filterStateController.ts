import { Callback, FilterGroup, FilterValueType, OnCallbackSet, OnFilterStateChangedCallback } from '../types';
import { filterGroupExists, registerCallback } from '../utils';

export class FilterStateController<TData> {
	filterState: FilterGroup[] = [];
	onFilterStateChangedCallbacks: Callback<OnFilterStateChangedCallback<TData>>[] = [];

	/**
	 * Check if a value is currently being filtered out from the dataset
	 */
	checkValueIsInactive = (groupName: string, value: FilterValueType) =>
		Boolean(this.filterState.find(({ name }) => name === groupName)?.values.includes(value));

	/**
	 * Get all the values that are currently being filtered out from a specific group
	 * @param groupName
	 * @returns
	 */
	getInactiveGroupValues = (groupName: string) =>
		this.filterState.find(({ name }) => name === groupName)?.values ?? [];

	/** Add or remove a filter value from the blacklist */
	changeFilterItem = (
		action: 'MarkInactive' | 'MarkActive',
		groupName: string,
		newValue: FilterValueType,
		preventFiltering?: boolean
	) => {
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
		this.onFilterStateChangedCallbacks.forEach(({ callback }) => callback(this.filterState, this));
	};

	/**
	 * Register callback to be called when filter state changes
	 */
	onFilterStateChange = (cb: OnFilterStateChangedCallback<TData>): OnCallbackSet =>
		registerCallback(cb, this.onFilterStateChangedCallbacks, this.unsubOnFilterStateChange);

	private unsubOnFilterStateChange = (id: string) => {
		this.onFilterStateChangedCallbacks = this.onFilterStateChangedCallbacks.filter((s) => s.id !== id);
	};

	/**
	 * Add or remove all values in a filter group
	 */
	markAllValuesActive = (groupName: string) => {
		const group = this.filterState.find(({ name }) => name === groupName);
		if (!group) return;
		this.setFilterState(this.filterState.filter(({ name }) => name !== groupName));
	};

	/**
	 * Manually set the filter state
	 */
	setFilterState = (newFilterState: FilterGroup[]) => {
		this.filterState = newFilterState;
		this.onFilterStateChangedCallbacks.forEach(({ callback }) => callback(newFilterState, this));
	};

	/** Clears all active filters */
	clearActiveFilters = () => {
		this.setFilterState([]);
	};
}
