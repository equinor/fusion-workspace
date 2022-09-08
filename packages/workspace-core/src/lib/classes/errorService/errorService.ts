import { Observable } from '../observable';

export class ErrorService<TError> {
	/** Triggers an error event */
	throwError: (error: TError) => void;

	/** Register a callback to be called when an error occurs */
	onError: (cb: (error: TError) => void) => void;

	constructor() {
		const error = new Observable<TError>();
		this.throwError = error.setValue;
		this.onError = error.onchange;
	}
}
