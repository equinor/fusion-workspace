import { GridController } from '../classes';

const mocFunction = jest.fn();

const gridController = new GridController((s) => '123');

/**
 * Test to make sure the onRowDataChanged callbacks are called and passing the correct data
 */
describe('Validates that callbacks are called when row data changes', () => {
	it('Should call the onRowDataChangedCallback', () => {
		expect(gridController.rowData.length).toBe(0);
		gridController.onRowDataChanged((s) => {
			mocFunction();
			expect(s.length).toBe(2);
		});
		gridController.setRowData([1, 2]);
		expect(mocFunction).toBeCalled();
		expect(mocFunction).toBeCalledTimes(1);
	});
});
