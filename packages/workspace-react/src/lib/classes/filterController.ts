import { Observable, OnchangeCallback } from '@workspace/workspace-core';

export class FilterController {
	/** The filter component to render in the header */
	FilterComponent?: () => JSX.Element;

	isFilterOpen: boolean;

	setIsFilterOpen: (value: boolean) => void;

	onFilterStateChanged: (callback: OnchangeCallback<boolean>) => () => void;

	constructor() {
		const filter = new Observable(false, (newVal, oldVal) => newVal === oldVal);
		this.setIsFilterOpen = filter.setValue;
		this.onFilterStateChanged = filter.onchange;
		this.isFilterOpen = Boolean(filter.value);
		filter.onchange((val) => {
			this.isFilterOpen = val;
		});
	}
}
