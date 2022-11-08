import { Subject } from 'rxjs';

/** type for capturing controller state function */
type CaptureFunc<TState> = () => Partial<TState>;

/**
 * Allows for capturing controller states and consolidates data for persistance.
 * for more info se documentation [Bookmark Service](https://equinor.github.io/fusion-workspace/packages/workspace-core/services/#bookmark-service)
 */

export function createBookmarksService<TBookmarkState extends Record<PropertyKey, unknown>>() {
	const captureCallbacks: CaptureFunc<TBookmarkState>[] = [];
	const capture$ = new Subject<TBookmarkState>();
	const capture = () => capture$.next(getBookmarkState());
	const apply$ = new Subject<TBookmarkState>();
	const apply = (state: TBookmarkState) => apply$.next(state);
	const registerCapture = (cb: CaptureFunc<TBookmarkState>) => {
		captureCallbacks.push(cb);
	};

	const getBookmarkState = () =>
		// eslint-disable-next-line no-return-assign
		captureCallbacks.reduce((state, callback) => (state = { ...state, ...callback() }), {} as TBookmarkState);

	return {
		capture,
		capture$: capture$.asObservable(),
		apply,
		apply$: apply$.asObservable(),
		registerCapture,
	};
}
