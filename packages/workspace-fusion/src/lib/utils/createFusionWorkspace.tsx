import { tokens } from '@equinor/eds-tokens';
import { Workspace } from '@equinor/workspace-react';
import styled from 'styled-components';
import { FusionWorkspaceBuilder } from '../classes';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData, TError> = (
	builder: FusionWorkspaceBuilder<TData, TError>
) => FusionWorkspaceBuilder<TData, TError>;

export function createFusionWorkspace<TData, TError>(
	appKey: string,
	color: string,
	builderFunc: UserConfig<TData, TError>
) {
	const builder = builderFunc(new FusionWorkspaceBuilder(appKey, color));

	return () => (
		<StyledFusionWorkspace>
			<Workspace controller={sortFusionTabs(builder.viewController)} />
		</StyledFusionWorkspace>
	);
}

/**
 * Fusion wraps with its own styling
 */
const StyledFusionWorkspace = styled.div`
	::-webkit-scrollbar {
		height: 0.5rem;
		width: 0.5rem;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: none;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${tokens.colors.interactive.primary__resting.rgba};
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${tokens.colors.interactive.primary__hover.rgba};
	}
`;
