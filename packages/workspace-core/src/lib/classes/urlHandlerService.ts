import { OnchangeCallback } from '../types';
import { Observable } from './observable';

interface Location {
	queryParams: string[];
	url: string;
}

export class URLService {
	onUrlChange: (callback: OnchangeCallback<Location>) => void;
	setUrl: (url: string) => void;
	url: Location;

	constructor() {
		const { onchange, setValue } = new Observable<Location>(getUrl(), compareUrl);
		this.onUrlChange = onchange;
		this.setUrl = (url: string) => setValue(extractQueryParameters(url));
		onchange((url) => {
			this.url = url;
		});
		this.url = getUrl();
	}
}

function extractQueryParameters(url: string): Location {
	const [baseUrl, query] = url.split('?');
	const queryParams = query?.split('&') ?? [];

	return {
		queryParams,
		url: baseUrl,
	};
}

const getUrl = (): Location => extractQueryParameters(window.location.href);

/** Compare function for urls, only compares query params for now */
function compareUrl(a?: Location, b?: Location) {
	if (!a || !b) return false;
	if (a.queryParams.length !== b.queryParams.length) return false;

	return a.queryParams.every((param) => b.queryParams.includes(param));
}
