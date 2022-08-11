import { WorkspaceController } from '../controllers';

const workspaceController = new WorkspaceController();
describe('events', () => {
	it('should add onOriginalDataChanged event', () => {
		const mocFunction = jest.fn();

		const s1 = workspaceController.onDataChanged(() => {
			mocFunction();
		});
		const s2 = workspaceController.onDataChanged(() => {
			mocFunction();
		});
		workspaceController.setData([]);
		expect(mocFunction).toBeCalled();
		expect(mocFunction).toBeCalledTimes(2);

		s1.unSubscribe();
		s2.unSubscribe();
		workspaceController.setData([]);
		expect(mocFunction).toBeCalledTimes(2);
		workspaceController.setData([]);
	});
	it('should add onFilteredDataChange event', () => {
		const mocFunction = jest.fn();

		const s1 = workspaceController.onFilteredDataChanged(() => {
			mocFunction();
		});
		const s2 = workspaceController.onFilteredDataChanged(() => {
			mocFunction();
		});
		workspaceController.setFilteredData([]);
		expect(mocFunction).toBeCalled();
		expect(mocFunction).toBeCalledTimes(2);

		s1.unSubscribe();
		s2.unSubscribe();
		workspaceController.setFilteredData([]);
		expect(mocFunction).toBeCalledTimes(2);
	});
	it('should add onError event', () => {
		const mocFunction = jest.fn();

		const s1 = workspaceController.onError(() => {
			mocFunction();
		});
		const s2 = workspaceController.onError(() => {
			mocFunction();
		});
		workspaceController.throwError('test');
		expect(mocFunction).toBeCalled();
		expect(mocFunction).toBeCalledTimes(2);

		s1.unSubscribe();
		s2.unSubscribe();
		workspaceController.throwError('test');
		expect(mocFunction).toBeCalledTimes(2);
	});
	it('should add onClick event', () => {
		const mocFunction = jest.fn();

		const s1 = workspaceController.onClick(() => {
			mocFunction();
		});
		workspaceController.onClick(() => {
			mocFunction();
		});

		workspaceController.click({});
		expect(mocFunction).toBeCalled();
		expect(mocFunction).toBeCalledTimes(2);

		s1.unSubscribe();
		workspaceController.click({});
		expect(mocFunction).toBeCalledTimes(3);
	});
});
