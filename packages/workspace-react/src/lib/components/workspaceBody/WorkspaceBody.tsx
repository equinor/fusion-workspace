import { ResizableSidesheet } from '../resizableSidesheet';
import { WorkspaceDataLoader } from '../workspaceDataLoader';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
	return (
		<StyledWorkspaceBody>
			<WorkspaceDataLoader>
				<WorkspaceTab />
			</WorkspaceDataLoader>
			<ResizableSidesheet />
		</StyledWorkspaceBody>
	);
}
