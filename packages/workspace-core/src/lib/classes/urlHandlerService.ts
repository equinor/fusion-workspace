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
		const { onchange, setValue } = new Observable<Location>(getUrl());
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
function getUrl(): Location {
	return extractQueryParameters(window.location.href);
}
