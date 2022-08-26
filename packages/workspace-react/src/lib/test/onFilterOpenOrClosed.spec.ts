import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when filter opens or closes', () => {
	it('Should call callback when filter opens', () => {
		const {
			filter: { isFilterOpen, setIsFilterOpen, onFilterStateChanged },
		} = new WorkspaceViewController();
		const mockFunction = jest.fn();

		expect(isFilterOpen).toBeFalsy();
		onFilterStateChanged((isOpen) => {
			expect(isOpen).toBeTruthy();
			mockFunction();
		});
		setIsFilterOpen(true);
		expect(mockFunction).toBeCalledTimes(1);
	});
});
