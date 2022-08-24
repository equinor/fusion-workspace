import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when isLoading property changes', () => {
	it('Should call callback when isLoading state changes', () => {
		const { isLoading, setIsLoading, onIsLoadingChanged } = new WorkspaceViewController([], '');
		const mockFunction = jest.fn();

		expect(isLoading).toBeFalsy();
		onIsLoadingChanged((isLoading) => {
			expect(isLoading).toBeTruthy();
			mockFunction();
		});
		setIsLoading(true);
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should not fire callbacks if the value didnt change', () => {
		const { isLoading, setIsLoading, onIsLoadingChanged } = new WorkspaceViewController([], '');
		const mockFunction = jest.fn();
		expect(isLoading).toBeFalsy();
		onIsLoadingChanged(() => {
			mockFunction();
		});
		setIsLoading(false);
		expect(mockFunction).not.toBeCalled();
	});
});
