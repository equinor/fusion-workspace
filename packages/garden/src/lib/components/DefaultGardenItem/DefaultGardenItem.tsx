import { memo, useMemo } from 'react';
import { useGardenContext } from '../../hooks';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
interface DefaultGardenItemProps {
	columnExpanded: boolean;
	item: Record<string, string>;
	depth: number;
	isSelected: boolean;
}

export const DefaultGardenItem = memo(
	({ columnExpanded, item, depth, isSelected }: DefaultGardenItemProps): JSX.Element => {
		const controller = useGardenContext();
		const {
			clickEvents: { onClickItem },
			visuals: { getDescription, getItemColor },
		} = controller;

		const { color, description, label } = useMemo(() => {
			const label = controller.nodeLabelCallback(item, controller);
			const color = (getItemColor && getItemColor(item)) ?? 'grey';

			const description = getDescription && getDescription(item);

			return {
				label,
				color,
				description,
			};
		}, [controller, getItemColor, getDescription, item]);

		return (
			<StyledDefaultPackage
				bgColor={color}
				onClick={() => onClickItem && onClickItem(item, controller)}
				isSelected={isSelected}
				depth={depth}
			>
				<div>{label}</div>
				{columnExpanded && <div>{description}</div>}
			</StyledDefaultPackage>
		);
	}
);
