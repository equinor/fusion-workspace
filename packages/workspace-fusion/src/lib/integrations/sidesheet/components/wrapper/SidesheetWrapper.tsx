import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceSidesheets } from '../../../../types';
import { IsNeverType } from '../../../../types/typescriptUtils/isNeverType';
import { useState, useEffect, useCallback } from 'react';
import { SidesheetConfig } from '../../sidesheet';

type SidesheetWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
> = {
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
	config: SidesheetConfig<TData, TContext, TCustomSidesheetEvents>;
};

export const SidesheetWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent<string> = never
>({
	config,
	mediator,
}: SidesheetWrapperProps<TData, TContext, TCustomSidesheetEvents>) => {
	const [currEv, setCurrEv] = useState<IsNeverType<
		TCustomSidesheetEvents,
		WorkspaceSidesheets<TData>,
		TCustomSidesheetEvents | WorkspaceSidesheets<TData>
	> | null>(null);

	const handleSetter = useCallback(
		(
			ev: IsNeverType<
				TCustomSidesheetEvents,
				WorkspaceSidesheets<TData>,
				TCustomSidesheetEvents | WorkspaceSidesheets<TData>
			> | null
		) => {
			if (isSelectionEvent(currEv) && !isSelectionEvent(ev)) {
				mediator.selectionService.selectedNodes = [];
			}
			setCurrEv(ev);
		},
		[currEv]
	);

	useEffect(() => {
		const sub = mediator.sidesheetService.subscribeAll(handleSetter);
		return () => sub();
	}, [handleSetter]);

	if (!currEv) return null;

	return <config.Sidesheet ev={currEv} controller={{ close: () => handleSetter(null) }} />;
};
const key: WorkspaceSidesheets<unknown>['type'] = 'details_sidesheet';

const isSelectionEvent = <T extends WorkspaceSidesheets<unknown>>(
	obj: WorkspaceSidesheets<unknown> | unknown
): obj is T => typeof obj === 'object' && obj?.['type'] === key;
