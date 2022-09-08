import { generateFilterValues } from '../utils';
import { FilterGroup, FilterOptions } from '../types';

interface ScopeChangeRequest {
	name: string;
	originSource: string;
	changeCategory: { name: string; id: string };
}

enum FilterNames {
	Origin = 'origin',
	Category = 'category',
}

const filterOptions: FilterOptions<ScopeChangeRequest> = [
	{
		name: FilterNames.Origin,
		valueFormatter: ({ originSource }) => originSource,
	},
	{
		name: FilterNames.Category,
		valueFormatter: ({ changeCategory }) => changeCategory.name,
	},
];

const expectedOutput: FilterGroup[] = [
	{
		name: FilterNames.Origin,
		values: ['DCN', 'NCR'],
	},
	{
		name: FilterNames.Category,
		values: ['Hidden Carry Over', 'Quality'],
	},
];

const mockData: ScopeChangeRequest[] = [
	{
		changeCategory: { id: '1', name: 'Hidden Carry Over' },
		originSource: 'NCR',
	},
	{
		changeCategory: { id: '2', name: 'Hidden Carry Over' },
		originSource: 'DCN',
	},
	{
		changeCategory: { id: '3', name: 'Quality' },
		originSource: 'DCN',
	},
] as ScopeChangeRequest[];

/**
 * //TODO: Fix
 *  Very sensitive to order and sorting
 */
describe('Should create expected filter values', () => {
	it('Should create filter items matching output', () => {
		const result = generateFilterValues(filterOptions, mockData);
		expect(result).toStrictEqual(expectedOutput);
	});
});

interface Mock {
	names: string[];
}

const mockArrayData: Mock[] = [
	{
		names: ['John', 'Cena', 'Jonas'],
	},
	{
		names: ['Jane', 'Doe', 'John'],
	},
	{
		names: ['Krista', 'Doe', 'John'],
	},
	{
		names: [],
	},
];

const filterArrayOptions: FilterOptions<Mock> = [
	{
		name: 'Name',
		valueFormatter: ({ names }) => names,
	},
];

const expectedArrayOutput: FilterGroup[] = [
	{
		name: 'Name',
		values: ['Cena', 'Doe', 'Jane', 'John', 'Jonas', 'Krista'],
	},
];

describe('Create filter items from array', () => {
	it('Should not have duplicates', () => {
		const result = generateFilterValues(filterArrayOptions, mockArrayData);
		expect(result).toStrictEqual(expectedArrayOutput);
	});
});
