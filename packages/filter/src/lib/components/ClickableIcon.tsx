import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

export interface ClickableIconProps {
	name: string;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
	color?: string | undefined;
	size?: 16 | 24 | 32 | 40 | 48;
}

/**
 * TODO: Make union type of available EDS icons
 * Expand with props as needed
 * Wraps EDS icon and styles it so its clickable
 * @returns Clickable SVG
 */
export const ClickableIcon = ({
	name,
	onClick,
	color = `${tokens.colors.interactive.primary__resting.hex}`,
	size = 24,
}: ClickableIconProps): JSX.Element => {
	return <Icon size={size} name={name} onClick={onClick} style={{ cursor: 'pointer' }} color={color} />;
};
