import { FusionMediator, GetIdentifier } from '../types';
import { BrowserHistory } from 'history';
import { BaseEvent } from '@equinor/workspace-core';

/** A union type of the workspace query parameters */
type QueryParamTopic = 'item' | 'tab';

type QueryParam = [QueryParamTopic, string | undefined];

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(val: QueryParam[], mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>, history: BrowserHistory) {
	val.forEach((val) => {
		const [topic, value] = val;
		if (!value) {
			mediator.urlService.url.searchParams.delete(topic);
		} else {
			mediator.urlService.url.searchParams.set(topic, value);
		}
	});
	history.push(mediator.urlService.url.toString());
}

export function configureUrlWithHistory<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>, history: BrowserHistory) {
	const unsub = history.listen(() => {
		mediator.urlService.url = new URL(window.location.href);
	});

	mediator.onDestroy(() => unsub());

	mediator.selectionService.selectedNodes$.subscribe((nodes) => {
		const [id] = nodes.map((s) => s.id);
		updateQueryParams([['item', id]], mediator, history);
	});
}
