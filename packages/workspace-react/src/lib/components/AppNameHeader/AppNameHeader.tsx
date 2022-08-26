import { useControllerContext } from '../../hooks';
import { StyledTitle, StyledTitleBar } from './appNameHeader.styles';

export function AppNameHeader() {
	const { appKey } = useControllerContext();

	return (
		<StyledTitleBar>
			<StyledTitle variant="h3">{appKey}</StyledTitle>
		</StyledTitleBar>
	);
}
