import { useControllerContext } from '../../hooks';
import { WorkspaceErrorBoundary } from '../ErrorBoundary/WorkspaceErrorBoundary';

import { WorkspaceDataLoader } from '../workspaceDataLoader';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
	const { Sidesheet } = useControllerContext();

	return (
		<StyledWorkspaceBody id="workspace_body">
			<WorkspaceDataLoader>
				<WorkspaceErrorBoundary>
					<WorkspaceTab />
				</WorkspaceErrorBoundary>
			</WorkspaceDataLoader>
			{Sidesheet && <Sidesheet />}
		</StyledWorkspaceBody>
	);
}
