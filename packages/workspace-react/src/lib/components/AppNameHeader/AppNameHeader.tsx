import { WorkspaceProps } from '../Workspace';
import { StyledTitle, StyledTitleBar } from './appNameHeader.styles';

export function AppNameHeader<TTabnames extends string, TError>({ controller }: WorkspaceProps<TTabnames, TError>) {
	return (
		<StyledTitleBar>
			<StyledTitle variant="h3">{controller.appKey}</StyledTitle>
		</StyledTitleBar>
	);
}
