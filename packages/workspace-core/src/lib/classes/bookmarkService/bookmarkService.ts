export class BookmarkService<TBookmarkState extends Record<PropertyKey, unknown>> {
	private onCaptureCallbacks: OnCapture<TBookmarkState>[] = [];
	private onApplyCallbacks: OnCapture<TBookmarkState>[] = [];
	private captureCallbacks: CaptureFunc<TBookmarkState>[] = [];

	/**Subscribe to bookmark capture events */
	onCapture = (cb: OnCapture<TBookmarkState>) => {
		this.onCaptureCallbacks.push(cb);
	};

	/**
	 * Subscribe to apply events
	 * @param cb Function to be called when someone applies a bookmark
	 */
	onApply = (cb: OnCapture<TBookmarkState>) => {
		this.onApplyCallbacks.push(cb);
	};

	/**Applies a bookmark state to all the subscribers listening on onApply event */
	apply = (state: TBookmarkState) => this.onApplyCallbacks.forEach((s) => s(state));

	/** Captures a bookmark using all the registered capturers */
	capture = () => {
		const bookmarkState = this.captureCallbacks.reduce(
			(state, callback) => (state = { ...state, ...callback() }),
			{} as TBookmarkState
		);
		this.onCaptureCallbacks.forEach((callback) => callback(bookmarkState));
		return bookmarkState;
	};

	/** Register a function to capture a partial bookmark state */
	registerCapture(cb: CaptureFunc<TBookmarkState>) {
		this.captureCallbacks.push(cb);
	}
}

type OnCapture<TState> = (state: TState) => void;

type CaptureFunc<TState> = () => Partial<TState>;
