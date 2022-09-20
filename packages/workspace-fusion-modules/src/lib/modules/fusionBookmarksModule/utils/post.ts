/** Post message with typing */
export function post<T>(obj: T) {
	window.postMessage(obj);
}
