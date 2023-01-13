import { ReactNode } from 'react';

import { WorkspaceDataLoader } from '../workspaceDataLoader';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

type WorkspaceBodyProps = {
	children: ReactNode;
	isLoading: boolean;
};

export function WorkspaceBody({ children, isLoading }: WorkspaceBodyProps) {
	return (
		<StyledWorkspaceBody id={'workspace_body'}>
			<WorkspaceDataLoader isLoading={isLoading}>
				<WorkspaceTab />
			</WorkspaceDataLoader>
			{children}
		</StyledWorkspaceBody>
	);
}
