import { FusionMediator, GetIdentifier } from '../types';
import { BrowserHistory } from 'history';

/** A union type of the workspace query parameters */
type QueryParamTopic = 'item' | 'tab';

/** Defines the type for the query parameter */
export type QueryParam = `${QueryParamTopic}=${string}`;

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(val: QueryParam[], mediator: FusionMediator<TData, TContext>, history: BrowserHistory) {
	val.forEach((val) => {
		const [topic, value] = val.split('=');
		mediator.urlService.url.searchParams.set(topic, value);
	});
	history.push(mediator.urlService.url.toString());
}

export function configureUrlWithHistory<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(mediator: FusionMediator<TData, TContext>, history: BrowserHistory, getIdentifier: GetIdentifier<TData>) {
	history.listen(() => {
		mediator.urlService.url = new URL(window.location.href);
	});
	mediator.clickService.click$.subscribe(({ item }) => {
		const id = getIdentifier(item);
		mediator.selectionService.selectedNodes = [id];
		updateQueryParams([`item=${id}`], mediator, history);
	});
}
