import { createBookmarksService } from '../utils/services';

describe('Should capture bookmarks', () => {
	it('Should emit values on capture$', () => {
		const mockFunction = jest.fn();
		const internalState = [1, 2, 3];
		const bookmarkService = createBookmarksService<{ i: number[] }>();
		bookmarkService.registerCapture(() => ({ i: internalState }));
		bookmarkService.capture$.subscribe(mockFunction);
		bookmarkService.capture();
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should emit values on apply$', () => {
		const mockFunction = jest.fn();
		const internalState = [1, 2, 3];
		const bookmarkService = createBookmarksService<{ i: number[] }>();

		bookmarkService.apply$.subscribe(mockFunction);
		bookmarkService.apply({ i: internalState });
		expect(mockFunction).toBeCalledTimes(1);
	});
});
