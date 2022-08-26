import { FusionMediator } from '../types';
import { BrowserHistory } from 'history';

/** A union type of the workspace query parameters */
type QueryParamTopic = 'item' | 'tab';

/** Defines the type for the query parameter */
export type QueryParam = `${QueryParamTopic}=${string}`;

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<TData, TError>(
	val: QueryParam[],
	mediator: FusionMediator<TData, TError>,
	history: BrowserHistory
) {
	/** Remove all topics from existing url that you want to replace */
	const existingQueryParams = mediator.url.url.queryParams.filter(
		(queryParam) => !val.map((s) => s.split('=')[0]).includes(queryParam.split('=')[0])
	);

	const newQueryParams = [...existingQueryParams, ...val].sort();

	history.push(
		`?${newQueryParams
			.map((s) => `${s}`)
			.toString()
			.replace(',', '&')}`
	);
}

export function configureUrlWithHistory<TData, TError>(
	mediator: FusionMediator<TData, TError>,
	history: BrowserHistory
) {
	history.listen((val) => {
		console.log('Actual history object requested a change');
		mediator.url.setUrl(`${val.location.pathname}${val.location.search}`);
	});

	mediator.onMount(() => {
		console.log('Wokrspace mounted');
		const items = mediator.url.url.queryParams.filter((s) => s.includes('item'));
		console.log(`FOund items in url while mounting ${items}`);
	});
}
