import { FusionMediator } from '@equinor/workspace-fusion';
import history from 'history/browser';
import { QueryParam } from '../types/queryParam';

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<TData, TError>(val: QueryParam[], mediator: FusionMediator<TData, TError>) {
	/** Remove all topics from existing url that you want to replace */
	const existingQueryParams = mediator.urlService.url.queryParams.filter((queryParam) =>
		patchQueryParams(queryParam, val)
	);

	const newQueryParams = [...existingQueryParams, ...val].sort();

	/** Dont update url if nothing changed */
	if (arrayToQueryParam(mediator.urlService.url.queryParams) === arrayToQueryParam(newQueryParams)) return;

	history.push(`?${arrayToQueryParam(newQueryParams)}`);
}
/**
 * Returns false if the query param exists in the query params array
 * @returns boolean
 */
function patchQueryParams(queryParam: string, newQueryParams: QueryParam[]) {
	return !newQueryParams.map((s) => s.split('=')[0]).includes(queryParam.split('=')[0]);
}

function arrayToQueryParam(args: string[]) {
	return args
		.map((s) => `${s}`)
		.toString()
		.replace(',', '&');
}
