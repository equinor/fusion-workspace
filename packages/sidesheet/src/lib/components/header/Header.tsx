import { Icon, Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useSidesheet } from '../../hooks';
import { useObservable } from '../../hooks/useObservable';
import {
	StyledColourTab,
	StyledHeader,
	StyledLeftHeader,
	StyledRightHeader,
	StyledTitle,
} from './sidesheetHeader.styles';

export function SidesheetHeader() {
	const { item$, title$, config$ } = useSidesheet();

	const config = useObservable(config$, config$.value);
	const title = useObservable(title$, title$.value);
	const close = () => item$.next(null);

	return (
		<StyledHeader>
			<StyledLeftHeader>
				<StyledColourTab appColor={config?.color ?? ''}>
					<Icon name="chevron_right" size={24} color={tokens.colors.ui.background__default.hex} />
				</StyledColourTab>
				<StyledTitle>{title}</StyledTitle>
			</StyledLeftHeader>

			<StyledRightHeader>
				<Button variant="ghost_icon" onClick={close}>
					<Icon name="close" size={24} color={tokens.colors.interactive.primary__resting.hex} />
				</Button>
			</StyledRightHeader>
		</StyledHeader>
	);
}
