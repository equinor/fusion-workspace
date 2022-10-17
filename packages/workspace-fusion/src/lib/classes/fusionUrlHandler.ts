import { FusionMediator } from '../types';
import { BrowserHistory } from 'history';

/** A union type of the workspace query parameters */
type QueryParamTopic = 'item' | 'tab';

/** Defines the type for the query parameter */
export type QueryParam = `${QueryParamTopic}=${string}`;

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<TData>(val: QueryParam[], mediator: FusionMediator<TData>, history: BrowserHistory) {
	val.forEach((val) => {
		const [topic, value] = val.split('=');
		mediator.urlService.url.searchParams.set(topic, value);
	});
	history.push(mediator.urlService.url.toString());
}

export function configureUrlWithHistory<TData>(mediator: FusionMediator<TData>, history: BrowserHistory) {
	history.listen(() => {
		mediator.urlService.url = new URL(window.location.href);
	});
}
