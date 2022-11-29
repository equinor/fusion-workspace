import { useRef } from 'react';
import { Grid } from '@equinor/workspace-ag-grid';

import { FusionMediator } from '../../../..//types';
import { NoDataSplashScreen } from '../../../../components/NoDataSplashScreen';
import { GridController } from '../..';
import { useResizeObserver } from '../../../..//hooks/useResizeObserver';

export type GridWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	controller: GridController<TData>;
	mediator: FusionMediator<TData, TContext>;
};

export const GridWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({
	controller,
	mediator,
}: GridWrapperProps<TData, TContext>) => {
	const ref = useRef(null);
	const [_, height] = useResizeObserver(ref);

	return (
		<div id="workspace_grid_wrapper" style={{ height: '100%', width: '100%' }} ref={ref}>
			<NoDataSplashScreen mediator={mediator}>
				<Grid controller={controller} height={height} />
			</NoDataSplashScreen>
		</div>
	);
};
