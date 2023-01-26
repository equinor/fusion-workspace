import { Page, Report } from 'powerbi-client';
import { ICustomEvent } from 'service';
import { Callback, OnchangeCallback } from '../types';
import { Filter } from '../types/filter';
import { Observable } from './observable';

//TODO: @deprecate, use some sort of event hub to communicate the loaded report instead
export class PowerBiController {
	activePage?: Page;

	private setActivePage: (value: Page) => void;

	onActivePageChanged: (callback: OnchangeCallback<Page>) => () => void;

	filter?: Filter[];

	private cb: Callback<Report>[] = [];

	constructor() {
		const page = new Observable<Page>();
		this.onActivePageChanged = page.onchange;
		this.setActivePage = page.setValue;
		page.onchange((val) => {
			this.activePage = val;
		});
	}

	onReportReady = (callback: OnReportReady) => {
		const id = Math.random() * 16;
		this.cb.push({ callback, id });
		return () => {
			this.cb.filter((s) => s.id !== id);
		};
	};

	reportReady = (newValue: Report) => {
		newValue.getActivePage().then(this.setActivePage);
		newValue.on('pageChanged', (page: ICustomEvent<any>) => {
			this.setActivePage(page.detail.newPage);
		});
		this.cb.map(({ callback }) => callback).forEach((callback) => callback(newValue));
	};
}

type OnReportReady = (report: Report) => void;
