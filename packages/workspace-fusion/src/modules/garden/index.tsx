import { GardenController } from '@equinor/workspace-garden';
import { Provider, Tab } from '@equinor/workspace-react';
import { useEffect } from 'react';
import { FusionWorkspaceModule, WorkspaceProps } from '../../lib';
import { DataLoader } from '../../lib/integrations/data-source/components/DataLoader';
import { GardenWorkspaceHeader, GardenWrapper } from './components';
import { GardenIcon } from './icons/GardenIcon';
import { bookmarkEffect } from './utils/configureBookmarkService';
import { configureClickEvents } from './utils/configureClickEvents';
import { onDataChangedEffect } from './utils/configureDataChange';
import { highlightEffect } from './utils/configureHighlight';

export const gardenModule: FusionWorkspaceModule = {
	name: 'garden',
	setup: (props, mediator) => {
		const gardenConfig = props.gardenOptions;

		if (!gardenConfig) return;

		const gardenController = new GardenController<any, any, any, any>({
			...gardenConfig,
			data: [],
			getIdentifier: mediator.getIdentifier,
			getContext: () => mediator.contextService.getContext(),
		});

		configureClickEvents(gardenController, mediator);

		const provider: Provider = {
			Component: ({ children }) => {
				useEffect(onDataChangedEffect(gardenController, mediator), [mediator]);
				useEffect(highlightEffect(gardenController, mediator), [mediator]);
				useEffect(bookmarkEffect(gardenController, mediator), [mediator]);

				return <>{children}</>;
			},
			name: 'garden-sync',
		};

		return {
			provider,
			tab: {
				Component: () => (
					<DataLoader>
						<GardenWrapper controller={gardenController} mediator={mediator} />
					</DataLoader>
				),
				name: 'garden',
				TabIcon: GardenIcon,
				CustomHeader: () => <GardenWorkspaceHeader controller={gardenController} />,
			},
		};
	},
};
