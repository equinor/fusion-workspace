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
	const existingQueryParams = mediator.urlService.url.queryParams.filter((queryParam) =>
		patchQueryParams(queryParam, val)
	);

	const newQueryParams = [...existingQueryParams, ...val].sort();

	/** Dont update url if nothing changed */
	if (arrayToQueryParam(mediator.urlService.url.queryParams) === arrayToQueryParam(newQueryParams)) return;

	history.push(`?${arrayToQueryParam(newQueryParams)}`);
}

export function configureUrlWithHistory<TData, TError>(
	mediator: FusionMediator<TData, TError>,
	history: BrowserHistory
) {
	history.listen(({ location }) => {
		mediator.urlService.setUrl(`${window.location.href}${location.search}`);
	});
}

function arrayToQueryParam(args: string[]) {
	return args
		.map((s) => `${s}`)
		.toString()
		.replace(',', '&');
}

/**
 * Returns false if the query param exists in the query params array
 * @returns boolean
 */
function patchQueryParams(queryParam: string, newQueryParams: QueryParam[]) {
	return !newQueryParams.map((s) => s.split('=')[0]).includes(queryParam.split('=')[0]);
}
