import { OnchangeCallback } from '../../types';
import { Observable } from '../observable';

export class ClickService<TOnClick> {
	/** Value of the last click event */
	lastClick?: TOnClick;

	/** Triggers a clickevent */
	click: (clickEv: TOnClick) => void;

	/** Register a callback to be called when click is triggered */
	onClick: (callback: OnchangeCallback<TOnClick>) => () => void;

	constructor() {
		const click = new Observable<TOnClick>();

		click.onchange((val) => {
			this.lastClick = val;
		});
		this.click = click.setValue;
		this.onClick = click.onchange;
	}
}
