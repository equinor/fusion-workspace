/** PowerBiFilter */
export interface Filter {
	values: string[];
	target: {
		table: string;
		column: string;
	};
	operator: BasicFilterOperators;
}
type BasicFilterOperators = 'In' | 'NotIn' | 'All';
