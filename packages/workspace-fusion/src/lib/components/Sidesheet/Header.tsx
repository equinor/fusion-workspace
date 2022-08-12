import { Icon, Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { StyledColourTab, StyledHeader, StyledLeftHeader, StyledRightHeader, StyledTitle } from './styledHeader';

interface SidesheetHeaderProps {
	color: string;
	title: string;
	close: () => void;
}

export function SidesheetHeader({ close, color, title }: SidesheetHeaderProps) {
	return (
		<StyledHeader>
			<StyledLeftHeader>
				<StyledColourTab appColor={color}>
					<Icon name="chevron_right" size={24} color={'white'} />
				</StyledColourTab>
				<StyledTitle>{title}</StyledTitle>
			</StyledLeftHeader>

			<StyledRightHeader>
				{/* {menuItems.length > 0 && <IconMenu placement="bottom" items={menuItems} />} */}
				<Button variant="ghost_icon" onClick={close}>
					<Icon name="close" size={24} color={tokens.colors.interactive.primary__resting.hex} />
				</Button>
			</StyledRightHeader>
		</StyledHeader>
	);
}
