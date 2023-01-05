import { useRef } from 'react';
import { Grid } from '@equinor/workspace-ag-grid';

import { FusionMediator } from '../../../..//types';
import { NoDataSplashScreen } from '../../../../components/NoDataSplashScreen';
import { GridController } from '../..';
import { useResizeObserver } from '../../../..//hooks/useResizeObserver';
import { BaseEvent } from '@equinor/workspace-core';
import { useWorkspaceComponents } from '../../../../hooks/useWorkspaceComponents';
import { Icon } from '@equinor/eds-core-react';
import { settings } from '@equinor/eds-icons';
import { useInlet } from '@equinor/workspace-render-up';

Icon.add({ settings });

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

	useWorkspaceComponents('view_settings', () => <Icon name="settings" />);

	return (
		<div id="workspace_grid_wrapper" style={{ height: '100%', width: '100%' }} ref={ref}>
			<NoDataSplashScreen mediator={mediator}>
				<Grid controller={controller} height={height} />
			</NoDataSplashScreen>
		</div>
	);
};
