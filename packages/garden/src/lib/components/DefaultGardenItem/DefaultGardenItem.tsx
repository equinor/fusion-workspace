import { useMemo } from 'react';
import { useGardenContext, useIsSelected } from '../../hooks';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
interface DefaultGardenItemProps {
	columnExpanded: boolean;

	item: Record<string, string>;
	depth: number;
}

export const DefaultGardenItem = ({ columnExpanded, item, depth }: DefaultGardenItemProps): JSX.Element => {
	const controller = useGardenContext();
	const {
		clickEvents: { onClickItem },
		visuals: { getCustomItemColor, getCustomDescription },
	} = controller;

	const { color, description, label } = useMemo(() => {
		const label = controller.nodeLabelCallback(item, controller);
		const color = (getCustomItemColor && getCustomItemColor(item, controller)) ?? 'grey';

		const description = getCustomDescription && getCustomDescription(item, controller);

		return {
			label,
			color,
			description,
		};
	}, [controller, getCustomDescription, getCustomItemColor, item]);

	const isSelected = useIsSelected(item[controller.objectIdentifier] as unknown as string);

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
};
