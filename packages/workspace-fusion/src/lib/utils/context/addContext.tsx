import { BaseEvent } from '@equinor/workspace-core';
import { Provider } from '@equinor/workspace-react';
import { Fragment, useEffect } from 'react';
import { FusionMediator, WorkspaceProps } from '../../types';

export function addContext<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	contextOptions: WorkspaceProps<TData, TContext>['contextOptions'] | undefined,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): Provider | undefined {
	if (!contextOptions) return;

	return {
		Component: ({ children }) => {
			useEffect(() => {
				const sub = mediator.dataService.filteredData$.subscribe((data) => {
					if (!data) return;
					mediator.contextService.setContext(contextOptions(data));
				});
				return () => {
					sub.unsubscribe();
				};
			}, [mediator]);

			return <Fragment>{children}</Fragment>;
		},
		name: 'Context',
	};
}
