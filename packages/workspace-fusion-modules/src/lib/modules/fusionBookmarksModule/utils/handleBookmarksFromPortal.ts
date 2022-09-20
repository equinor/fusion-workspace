import { BookmarkActions } from '../types/actions';
import { post } from './post';
import { isStatus } from './typeGuard';

//Entry point for portal to use bookmarks in workspace
export function handleBoomarksFromPortal(action: BookmarkActions) {
	return new Promise((res, rej) => {
		/** Curry reject so it removes the event listener */
		const curriedReject = (reason?: string) => {
			window.removeEventListener('message', handler);
			rej(reason);
		};
		const timeoutId = handleTimeout(curriedReject);
		/** Curry resolve so it removes the event listener */
		const curriedResolve = (value: unknown) => {
			clearTimeout(timeoutId);
			window.removeEventListener('message', handler);
			res(value);
		};

		//Curry handler to get a variable to send to promiseHandler
		const handler = (ev: MessageEvent<unknown>) => promiseHandler(ev, curriedResolve);

		//Listen for the message that is returned from the listener that listens to the current return function
		window.addEventListener('message', handler);
		/** Send message and wait for response */
		return post<BookmarkActions>(action);
	});
}

// eslint-disable-next-line consistent-return
/**
 * Handle promise with timeout and wait for event
 * @param ev - Message event
 * @param res - Promise resolver
 */
const promiseHandler = (ev: MessageEvent<unknown>, res: (value: unknown) => void): void => {
	/**Dont reject if not status because multiple events can be fired */
	if (isStatus(ev.data)) {
		res(ev.data);
	}
};

//Reject promise if stalling
function handleTimeout(rej: (reason?: string) => void) {
	return setTimeout(() => rej('Took to long to respond'), 5000);
}
