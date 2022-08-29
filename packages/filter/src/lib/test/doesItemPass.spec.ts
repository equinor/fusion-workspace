import { FilterController } from '../classes';

interface MockInterface {
	name: string;
}

const filterGroupName = 'Name';
const name1 = 'Gustav';
const name2 = 'Jonas';

describe('Does item pass filter', () => {
	const controller = new FilterController<MockInterface>();
	controller.addValueFormatters([{ name: filterGroupName, valueFormatter: (s) => s.name }]);
	controller.setData([{ name: name1 }, { name: name2 }]);

	it('Should pass', () => {
		controller.filterStateController.setFilterState([{ name: filterGroupName, values: [name1] }]);

		expect(controller.filteredData.length).toBe(1);
		expect(controller.filteredData.map((s) => s.name)).toContain(name2);

		controller.filterStateController.setFilterState([]);
	});
});
