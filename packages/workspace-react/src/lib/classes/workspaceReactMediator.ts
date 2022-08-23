import { ObjectType, Observable, OnchangeCallback, WorkspaceMediator } from '@workspace/workspace-core';

export class WorkspaceReactMediator<
	TData,
	TOnClick extends ObjectType<TOnClick> = ObjectType<unknown>,
	TError extends ObjectType<TError> = ObjectType<unknown>,
	TContext extends ObjectType<TContext> = ObjectType<unknown>
> extends WorkspaceMediator<TData, TOnClick, TError, TContext> {
	isSidesheetOpen = false;
	setIsSidesheetOpen: (value: boolean) => void;
	onSidesheetStateChange: (callback: OnchangeCallback<boolean>) => () => void;

	isLoading = false;
	setIsLoading: (value: boolean) => void;
	onIsLoadingChange: (callback: OnchangeCallback<boolean>) => () => void;

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
	}
}
