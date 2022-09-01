import { ObjectType, Observable, OnchangeCallback, WorkspaceMediator } from '@workspace/workspace-core';
import { BookmarkService } from './bookmarkService/bookmarkService';

export class WorkspaceReactMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TContext extends ObjectType<TContext> = ObjectType<unknown>,
	TBookmarkState extends ObjectType<TBookmarkState> = ObjectType<unknown>
> extends WorkspaceMediator<TData, TOnClick, TError> {
	/**
	 * Callback that returns an instance of itself
	 * Helpful when chaining
	 */
	override addMiddleware = (cb: (mediator: this) => void) => {
		cb(this);
		return this;
	};

	bookmarkService = new BookmarkService<TBookmarkState>();

	isSidesheetOpen = false;
	setIsSidesheetOpen: (value: boolean) => void;
	onSidesheetStateChange: (callback: OnchangeCallback<boolean>) => () => void;

	isLoading = false;
	setIsLoading: (value: boolean) => void;
	onIsLoadingChange: (callback: OnchangeCallback<boolean>) => () => void;

	onMount: (callback: () => void) => () => void;

	onUnMount: (callback: () => void) => () => void;

	setMount: () => void;

	setUnmount: () => void;

	constructor() {
		super();
		const isLoading = new Observable(this.isLoading);
		isLoading.onchange((val) => {
			this.isLoading = val;
		});
		this.setIsLoading = isLoading.setValue;
		this.onIsLoadingChange = isLoading.onchange;

		const isSidesheetOpen = new Observable(this.isSidesheetOpen);
		isSidesheetOpen.onchange((val) => {
			this.isSidesheetOpen = val;
		});
		this.setIsSidesheetOpen = isSidesheetOpen.setValue;
		this.onSidesheetStateChange = isSidesheetOpen.onchange;

		const mounted = new Observable(false);
		this.onMount = mounted.onchange;
		this.setMount = () => mounted.setValue(!mounted.value);

		const unMounted = new Observable(false);
		this.onUnMount = unMounted.onchange;
		this.setUnmount = () => unMounted.setValue(!mounted.value);
	}
}
