import { Observable } from '../observable';

/**
 * The error service is a simple service for handling error occurring in a workspace.
 * For more documentation see here.
 * [Error Service](https://equinor.github.io/fusion-workspace/packages/workspace-core/services/#error-service)
 */
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
