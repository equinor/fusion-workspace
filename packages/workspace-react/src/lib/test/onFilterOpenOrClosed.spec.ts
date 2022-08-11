import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when filter opens or closes', () => {
	it('Should call callback when filter opens', () => {
		const { isFilterActive, setIsFilterOpen, onFilterOpenOrClosedChanged } = new WorkspaceViewController([], '');
		const mockFunction = jest.fn();

		expect(isFilterActive).toBeFalsy();
		onFilterOpenOrClosedChanged((isOpen) => {
			expect(isOpen).toBeTruthy();
			mockFunction();
		});
		setIsFilterOpen(true);
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should not fire callbacks if the value didnt change', () => {
		const { isFilterActive, setIsFilterOpen, onFilterOpenOrClosedChanged } = new WorkspaceViewController([], '');
		const mockFunction = jest.fn();
		expect(isFilterActive).toBeFalsy();
		onFilterOpenOrClosedChanged(() => {
			mockFunction();
		});
		setIsFilterOpen(false);
		expect(mockFunction).not.toBeCalled();
	});
});
