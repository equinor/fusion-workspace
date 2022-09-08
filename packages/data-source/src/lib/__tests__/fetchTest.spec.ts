import { FetchController } from '../classes';

describe('Fetch controller should handle cancellation and spam', () => {
	it('Should return same instance of promise if spamming api calls', async () => {
		const mockFunction = jest.fn();

		const fetch = () => {
			mockFunction();
			return [];
		};

		const fetchController = new FetchController(fetch);
		fetchController.getDataAsync();
		fetchController.getDataAsync();
		fetchController.getDataAsync();
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should fetch twice if awaiting promise', async () => {
		const mockFunction = jest.fn();

		const fetch = () => {
			mockFunction();
			return [];
		};

		const fetchController = new FetchController(fetch);
		await fetchController.getDataAsync();
		await fetchController.getDataAsync();
		expect(mockFunction).toBeCalledTimes(2);
	});

	it('Should correctly set loading states', async () => {
		const mockFunction = jest.fn();

		const { getDataAsync, onIsLoadingChanged } = basicTestStructure();
		onIsLoadingChanged(mockFunction);
		await getDataAsync();
		await getDataAsync();
		expect(mockFunction).toBeCalledTimes(2);
	});

	it('Should set isFetching state correctly', async () => {
		const mockFunction = jest.fn();
		const { getDataAsync, onIsFetchingChanged } = basicTestStructure();
		onIsFetchingChanged(mockFunction);
		await getDataAsync();
		await getDataAsync();
		expect(mockFunction).toBeCalledTimes(4);
	});

	it('Should reset states if fetch throws error', async () => {
		const fetch = () => {
			throw new Error('Something went wrong');
		};
		const { getDataAsync, isLoading, isFetching } = new FetchController(fetch);
		try {
			await getDataAsync();
			// eslint-disable-next-line no-empty
		} catch (e) {
		} finally {
			expect(isLoading).toBeFalsy();
			expect(isFetching).toBeFalsy();
		}
	});
});

/**Creates a new fetch controller */
function basicTestStructure() {
	const fetch = () => [];
	return new FetchController(fetch);
}
