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
		const { onchange, setValue } = new Observable<Location>(this.getUrl(), this.compareUrl);
		this.onUrlChange = onchange;
		this.setUrl = (url: string) => setValue(this.extractQueryParameters(url));
		onchange((url) => {
			this.url = url;
		});
		this.url = this.getUrl();
	}

	private extractQueryParameters = (url: string): Location => {
		const [baseUrl, query] = url.split('?');
		const queryParams = query?.split('&') ?? [];

		return {
			queryParams,
			url: baseUrl,
		};
	};

	private getUrl = (): Location => this.extractQueryParameters(window.location.href);

	/** Compare function for urls, only compares query params for now */
	private compareUrl = (a?: Location, b?: Location) => {
		if (!a || !b) return false;
		if (a.queryParams.length !== b.queryParams.length) return false;

		return a.queryParams.every((param) => b.queryParams.includes(param));
	};
}
