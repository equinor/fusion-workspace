import { useRef } from 'react';
import { Grid, GridController } from '@equinor/workspace-ag-grid';
import { useResizeObserver } from '../../../lib/hooks/useResizeObserver';
import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../lib';
import { NoDataSplashScreen } from '../../../lib/components/NoDataSplashScreen';

export type GridWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = {
	controller: GridController<TData>;
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
};

export const GridWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>({
	controller,
	mediator,
}: GridWrapperProps<TData, TContext, TCustomSidesheetEvents>) => {
	const ref = useRef(null);
	const [_, height] = useResizeObserver(ref);

	return (
		<div
			id="workspace_grid_wrapper"
			style={{ height: '100%', width: '100%', padding: '1rem 1rem 0rem 1rem' }}
			ref={ref}
		>
			<NoDataSplashScreen mediator={mediator}>
				<Grid controller={controller} height={height} />
			</NoDataSplashScreen>
		</div>
	);
};
