import { FilterConfiguration, ValueFormatterFilter } from '../types';
import { FilterController } from './filterController';

export class ReactFilterController<TData> extends FilterController<TData> {
	constructor(groups?: FilterConfiguration<TData>[]) {
		super();
		groups && this.addGroups(groups);
	}

	groups: FilterConfiguration<TData>[] = [];

	addGroups = (groups: FilterConfiguration<TData>[]) => {
		const valueFormatters = groups.map((s): ValueFormatterFilter<TData> => ({ ...s }));
		this.addValueFormatters(valueFormatters);
		this.groups = groups;
	};
}
