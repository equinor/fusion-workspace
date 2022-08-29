import { ValueFormatterFilter } from '../types';

export class ValueFormatterController<TData> {
	valueFormatters: ValueFormatterFilter<TData>[] = [];

	addValueFormatters = (valueFormatters: ValueFormatterFilter<TData>[]) => {
		this.valueFormatters = [...this.valueFormatters, ...valueFormatters];
	};
}
