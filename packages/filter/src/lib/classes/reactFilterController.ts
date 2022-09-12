import { FilterConfiguration, ValueFormatterFilter } from '../types';
import { FilterController } from './filterController';
import { Observable, OnchangeCallback } from './observable';

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

	isFilterExpanded = false;

	setIsFilterExpanded: (value: boolean) => void;

	onFilterExpandedChange: (callback: OnchangeCallback<boolean>) => () => void;

	groups: FilterConfiguration<TData>[] = [];

	addGroups = (groups: FilterConfiguration<TData>[]) => {
		const valueFormatters = groups.map((s): ValueFormatterFilter<TData> => ({ ...s }));
		this.addValueFormatters(valueFormatters);
		this.groups = groups;
	};
}
