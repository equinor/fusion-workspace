import { BookmarkActions } from '../types/actions';
import { post } from './post';
import { isStatus } from './typeGuard';

const BOOKMARK_ACTION_TIMEOUT = 5000;
const PING_TIMEOUT = 1;

//Entry point for portal to use bookmarks in workspace
export const handleBoomarksFromPortal = async (action: BookmarkActions) => {
	await pingPromise();
	return await bookmarksPromise(action);
};

function pingPromise() {
	return Promise.race([
		timeoutPromise(PING_TIMEOUT, 'Failed to reach server'),
		new Promise((res, rej) => {
			const pingHandler = (ev: MessageEvent<any>) => {
				if (!isStatus(ev.data)) return;
				window.removeEventListener('message', pingHandler);
				if (ev.data.status === 'Success') {
					res(ev.data.status);
				} else {
					rej(ev.data.status);
				}
			};

			window.addEventListener('message', pingHandler);
			post<BookmarkActions>({ type: 'ping' });
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
			const handler = (ev: MessageEvent<unknown>) => promiseHandler(ev, curriedResolve, curriedReject);

			//Listen for the message that is returned from the listener that listens to the current return function
			window.addEventListener('message', handler);
			/** Send message and wait for response */
			return post<BookmarkActions>(action);
		}),
	]);

//Reject promise if stalling
const timeoutPromise = (timeout: number, reason: string) =>
	new Promise((_, rej) => setTimeout(() => rej(reason), timeout));

/**
 * Handle promise with timeout and wait for event
 * @param ev - Message event
 * @param res - Promise resolver
 */
const promiseHandler = (
	ev: MessageEvent<unknown>,
	res: (value: unknown) => void,
	rej: (reason?: string) => void
): void => {
	/**Dont reject if not status because multiple events can be fired */
	if (!isStatus(ev.data)) return;
	if (ev.data.status === 'Success') {
		res(ev.data);
	} else {
		rej('Failed');
	}
};
