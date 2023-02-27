import { createGridController } from '@equinor/workspace-ag-grid';
import { Tab, Provider } from '@equinor/workspace-react';
import { DataLoader } from '../../lib/integrations/data-source/components/DataLoader';
import { useEffect } from 'react';
import { GridHeader } from './components/GridWorkspaceHeader';
import { GridWrapper } from './components/GridWrapper';
import { useContextService } from './hooks/useContextService';
import { GridIcon } from './icons/GridIcon';
import { bookmarkServiceEffect } from './utils/configureBookmark';
import { dataChangeEffect } from './utils/configureDataChange';
import { highlightSelectionEffect } from './utils/configureHighlightSelection';
import { setConfigOnController } from './utils/setConfigOnController';
import { WorkspaceProps } from '../../lib';

type ModuleSetup = () => { provider: Provider; tab: Tab<string> } | undefined;

/**
 * Adds the module to the workspace
 */
export const gridModule = {
	setup: (props: WorkspaceProps<any, any, any, any, any>, mediator: any): ReturnType<ModuleSetup> => {
		const gridConfig = props.gridOptions;
		if (!gridConfig) return;
		const gridController = createGridController<any, any>(mediator.getIdentifier, () => void 0);

		setConfigOnController(gridConfig, gridController, mediator);

		const provider: Provider = {
			Component: ({ children }) => {
				useContextService(mediator, gridController);
				useEffect(bookmarkServiceEffect(gridController, mediator), [mediator]);
				useEffect(dataChangeEffect(gridController, mediator), [mediator]);
				useEffect(highlightSelectionEffect(gridController, mediator), [mediator]);
				return <>{children}</>;
			},
			name: 'grid-sync',
		};

		return {
			provider,
			tab: {
				Component: () => (
					<DataLoader>
						<GridWrapper controller={gridController} mediator={mediator} />
					</DataLoader>
				),
				name: 'grid',
				TabIcon: GridIcon,
				CustomHeader: () => <GridHeader controller={gridController} />,
			},
		};
	},
	name: 'AG-GRID',
};

export default gridModule;
