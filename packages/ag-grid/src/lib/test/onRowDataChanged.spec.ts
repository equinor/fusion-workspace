import { createGridController } from '../utils';

const mocFunction = jest.fn();

const gridController = createGridController<{ age: number }>(() => '123');

/**
 * Test to make sure the onRowDataChanged callbacks are called and passing the correct data
 */
describe('Validates that callbacks are called when row data changes', () => {
	it('Should call the onRowDataChangedCallback', () => {
		expect(gridController.rowData.length).toBe(0);
		/**Will be called instantly because its a behaviour subject */
		gridController.rowData$.subscribe((s) => {
			if (!s) {
				throw Error('Argument undefined');
			}
			mocFunction();
		});
		expect(mocFunction).toBeCalled();
		gridController.rowData = [{ age: 12 }, { age: 12 }, { age: 12 }];
		expect(mocFunction).toBeCalledTimes(2);
	});
});
