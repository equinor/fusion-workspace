import { FusionMediator } from '../types';
import { BrowserHistory } from 'history';
import { BaseEvent } from '@equinor/workspace-core';
import { Provider } from '@equinor/workspace-react';
import { useEffect } from 'react';

//TODO: Move this out of classes

export const fusionQueryParams = ['item', 'tab'] as const;
/** A union type of the workspace query parameters */
type QueryParamTopic = typeof fusionQueryParams[number];

type QueryParam = [QueryParamTopic, string | undefined];

export function tryGetTabFromUrl() {
	const [_, tab] = fusionQueryParams;
	return new URL(window.location.toString()).searchParams.get(tab);
}

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
	history.replace(mediator.urlService.url.toString());
}

export function configureUrlWithHistory<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>, history: BrowserHistory): Provider {
	return {
		name: 'history',
		Component: ({ children }) => {
			useEffect(useHistorySync(mediator, history), [mediator]);
			useEffect(useSelectionSync(mediator, history), [mediator]);

			return <>{children}</>;
		},
	};
}

function useSelectionSync(mediator: FusionMediator<any, any, any>, history: BrowserHistory) {
	return () => {
		const sub = mediator.selectionService.selectedNodes$.subscribe((nodes) => {
			const [id] = nodes.map((s) => s.id);
			updateQueryParams([['item', id]], mediator, history);
		});
		return () => {
			sub.unsubscribe();
		};
	};
}

function useHistorySync(mediator: FusionMediator<any, any, any>, history: BrowserHistory) {
	return () => {
		const unsub = history.listen(() => {
			mediator.urlService.url = new URL(window.location.href);
		});
		return () => {
			unsub();
		};
	};
}

/**
 * Cleans up all query params used by fusion workspace when unmounting
 */
export const useCleanupQueryParams = (mediator: FusionMediator<any, any, any>, history: BrowserHistory) =>
	useEffect(
		() => () =>
			updateQueryParams(
				fusionQueryParams.map((param) => [param, undefined]),
				mediator,
				history
			)
	);
