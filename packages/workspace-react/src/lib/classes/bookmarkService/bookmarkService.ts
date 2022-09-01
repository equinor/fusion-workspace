export class BookmarkService<TBookmarkState extends Record<PropertyKey, unknown>> {
	private onCaptureCallbacks: OnCapture<TBookmarkState>[] = [];
	private onApplyCallbacks: OnCapture<TBookmarkState>[] = [];
	private captureCallbacks: CaptureFunc<TBookmarkState>[] = [];

	onCapture = (cb: OnCapture<TBookmarkState>) => {
		this.onCaptureCallbacks.push(cb);
	};

	onApply = (cb: OnCapture<TBookmarkState>) => {
		this.onApplyCallbacks.push(cb);
	};

	apply = (state: TBookmarkState) => this.onApplyCallbacks.forEach((s) => s(state));

	capture = () => {
		const bookmarkState = this.captureCallbacks.reduce(
			(state, callback) => (state = { ...state, ...callback() }),
			{} as TBookmarkState
		);
		this.onCaptureCallbacks.forEach((callback) => callback(bookmarkState));
		return bookmarkState;
	};

	registerCapture(cb: CaptureFunc<TBookmarkState>) {
		this.captureCallbacks.push(cb);
	}
}

type OnCapture<TState> = (state: TState) => void;

type CaptureFunc<TState> = () => Partial<TState>;
