import { WorkspaceProps } from '../Workspace';
import { StyledTitle, StyledTitleBar } from './appNameHeader.styles';

export function AppNameHeader<TTabnames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: WorkspaceProps<TTabnames, TData, TOnClick, TContext, TError>) {
	return (
		<StyledTitleBar>
			<StyledTitle variant="h3">{controller.appKey}</StyledTitle>
		</StyledTitleBar>
	);
}
