import { Filter } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/workspace-garden';
import { useControllerContext } from '@equinor/workspace-react';

import { useStatusBar } from '../../../status-bar';
import styled from 'styled-components';
import { TabNavigation } from '../../../common/components/TabNavigation';
import { StyledActionBar } from '../../../../components/Header/actionBar.styles';

type GardenWorkspaceHeaderProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
> = {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};

export function GardenWorkspaceHeader<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>
>({ controller }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>) {
	return (
		<StyledGardenHeader>
			<NavigationBar />
			<Filter />
		</StyledGardenHeader>
	);
}

const StyledGardenHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const NavigationBar = () => {
	const StatusBar = useStatusBar();

	return (
		<StyledActionBar>
			{StatusBar && <StatusBar />}

			<TabNavigation />
		</StyledActionBar>
	);
};
