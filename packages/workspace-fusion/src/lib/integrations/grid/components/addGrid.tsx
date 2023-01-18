import { Provider, WorkspaceViewController } from '@equinor/workspace-react';
import { createGridController, GridController } from '@equinor/workspace-ag-grid';
import { GridIcon } from '../icons/GridIcon';
import { FusionMediator, WorkspaceTabNames } from '../../../types';
import { useBookmarkService } from '../utils/configureBookmark';
import { configureDataChange as useDataChange } from '../utils/configureDataChange';
import { useHighlightSelection } from '../utils/configureHighlightSelection';
import { GridHeader } from './workspaceHeader';
import { setConfigOnController } from '../utils/setConfigOnController';
import { GridConfig } from '../';
import { GridWrapper } from './wrapper';
import { BaseEvent } from '@equinor/workspace-core';
import { useEffect } from 'react';

export function addGrid<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(gridConfig: GridConfig<TData> | undefined, mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>) {
	if (!gridConfig) return;
	const gridController = createGridController<TData, TContext>(mediator.getIdentifier, () => void 0);

	setConfigOnController(gridConfig, gridController, mediator);

	const provider: Provider = {
		Component: ({ children }) => {
			useEffect(useContextService(mediator, gridController), [mediator]);
			useEffect(useBookmarkService(gridController, mediator), [mediator]);
			useEffect(useDataChange(gridController, mediator), [mediator]);
			useEffect(useHighlightSelection(gridController, mediator), [mediator]);
			return <>{children}</>;
		},
		name: 'grid-sync',
	};

	return {
		provider,
		tab: {
			Component: () => <GridWrapper controller={gridController} mediator={mediator} />,
			name: 'grid',
			TabIcon: GridIcon,
			CustomHeader: () => <GridHeader controller={gridController} />,
		},
	};
}

function useContextService(mediator: FusionMediator<any, any, any>, gridController: GridController<any, any>) {
	return () => {
		const sub = mediator.contextService.context$.subscribe((s) => {
			gridController.context = s;
		});
		return () => {
			return sub.unsubscribe();
		};
	};
}
