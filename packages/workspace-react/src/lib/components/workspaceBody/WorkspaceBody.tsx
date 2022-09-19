import { WorkspaceErrorBoundary } from '../ErrorBoundary/WorkspaceErrorBoundary';
import { ResizableSidesheet } from '../resizableSidesheet';
import { WorkspaceDataLoader } from '../workspaceDataLoader';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
	return (
		<StyledWorkspaceBody>
			<WorkspaceDataLoader>
				<WorkspaceErrorBoundary>
					<WorkspaceTab />
				</WorkspaceErrorBoundary>
			</WorkspaceDataLoader>
			<ResizableSidesheet />
		</StyledWorkspaceBody>
	);
}
