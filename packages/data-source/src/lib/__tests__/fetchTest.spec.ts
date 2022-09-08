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
});
