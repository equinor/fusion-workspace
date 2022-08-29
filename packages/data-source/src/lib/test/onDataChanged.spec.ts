import { DataSourceController } from '../classes';

async function defaultFetch() {
	return [1, 2, 3] as any;
}
const mocFunction = jest.fn();

describe('Validates that the onDataChanged event fires correctly', () => {
	const controller = new DataSourceController(defaultFetch);

	it('Should run onDataChangedCallback', async () => {
		const unsubscribe = controller.data.onchange((s) => {
			mocFunction();
			expect(s.length).toBe(3);
		});
		await controller.fetch();
		expect(mocFunction).toBeCalledTimes(1);
		unsubscribe();
	});

	it('Should remove the data', () => {
		expect(controller.data.value?.length).toBeTruthy();
		controller.remove();
		expect(controller.data.value?.length).toBeFalsy();
	});
});
