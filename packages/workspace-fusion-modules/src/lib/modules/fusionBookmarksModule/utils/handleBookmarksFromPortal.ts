import { BookmarkActions } from '../types/actions';
import { post } from './post';
import { isStatus } from './typeGuard';

const BOOKMARK_ACTION_TIMEOUT = 5000;
const PING_TIMEOUT = 1;

const pingAction: BookmarkActions = { type: 'ping' };

//Entry point for portal to use bookmarks in workspace
export const handleBoomarksFromPortal = async (action: BookmarkActions) => {
	await pingPromise();
	return await bookmarksPromise(action);
};

/** Ensures the reciever is live */
function pingPromise() {
	return Promise.race([
		timeoutPromise(PING_TIMEOUT, 'Module not reachable'),
		new Promise((res, rej) => {
			const pingHandler = (ev: MessageEvent<unknown>) => {
				if (!isStatus<BookmarkActions>(ev.data) || ev.data.action.type !== 'ping') return;
				window.removeEventListener('message', pingHandler);
				if (ev.data.status === 'Success') {
					res(ev.data.status);
				} else {
					rej(ev.data.status);
				}
			};

			window.addEventListener('message', pingHandler);
			post<BookmarkActions>(pingAction);
		}),
	]);
}

// eslint-disable-next-line consistent-return
const bookmarksPromise = (action: BookmarkActions) =>
	Promise.race([
		timeoutPromise(BOOKMARK_ACTION_TIMEOUT, 'Action took too long'),
		new Promise((res, rej) => {
			const curriedResolve = (value: unknown) => {
				window.removeEventListener('message', handler);
				res(value);
			};

			const curriedReject = (reason?: string) => {
				rej(reason);
				window.removeEventListener('message', handler);
			};

			//Curry handler to get a variable to send to promiseHandler
			const handler = (ev: MessageEvent<unknown>) => eventHandler(ev, curriedResolve, curriedReject);

			//Listen for the message that is returned from the listener that listens to the current return function
			window.addEventListener('message', handler);
			/** Send message and wait for response */
			return post<BookmarkActions>(action);
		}),
	]);

/**Creates a new promise that rejects after timeout parameter amount of milliseconds
 *
 * ```js
 * //Promise will reject after 100milliseconds
 * const promise = timeoutPromise(100, "Took too long")
 * ```
 */
const timeoutPromise = (timeout: number, reason: string) =>
	new Promise<void>((_, rej) => setTimeout(() => rej(reason), timeout));

/**
 * Handle promise with timeout and wait for event
 * @param ev - Message event
 * @param res - Promise resolver
 */
const eventHandler = (
	ev: MessageEvent<unknown>,
	res: (value: unknown) => void,
	rej: (reason?: string) => void
): void => {
	//TODO: Validate action type
	/**Dont reject if not status because multiple events can be fired */
	if (!isStatus(ev.data)) return;
	if (ev.data.status === 'Success') {
		res(ev.data);
	} else {
		rej('Failed');
	}
};
