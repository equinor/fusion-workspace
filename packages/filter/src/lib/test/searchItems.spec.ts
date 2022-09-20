import { searchForStartsWith } from '../utils';
import { ValueFormatterFilter } from '../types';

interface TestInterface {
	name: string;
	originSource: string;
	changeCategory: { name: string; id: string };
	title: string;
}

const items: TestInterface[] = [
	{
		changeCategory: { name: 'Hidden Carry Over', id: '2' },
	},
	{
		changeCategory: { name: 'Quality', id: 3 },
	},
] as TestInterface[];

const valueFormatter: ValueFormatterFilter<TestInterface> = {
	name: 'Change category',
	valueFormatter: ({ changeCategory }) => changeCategory.name,
};

describe('Free text search across one filtergroup', () => {
	it('One item should pass', () => {
		const result = searchForStartsWith([valueFormatter], items, 'hidden');
		expect(result.length).toBe(1);
	});
});

const mockRequests: TestInterface[] = [
	{
		changeCategory: { name: 'Hidden Carry Over', id: '2' },
		title: 'Mock request',
	},
	{
		changeCategory: { name: 'Quality', id: 3 },
		title: 'Mock request #2',
	},
	{
		changeCategory: { name: 'Late design change', id: 4 },
		title: 'Request #3',
	},
] as TestInterface[];

const valueFormatters: ValueFormatterFilter<TestInterface>[] = [
	{
		name: 'Change category',
		valueFormatter: ({ changeCategory }) => changeCategory.name,
	},
	{ name: 'Title', valueFormatter: ({ title }) => title },
];

describe('Free text search across multiple filtergroups', () => {
	it('Both items should pass', () => {
		const result = searchForStartsWith(valueFormatters, mockRequests, 'mock');
		expect(result.length).toBe(2);
	});
});
