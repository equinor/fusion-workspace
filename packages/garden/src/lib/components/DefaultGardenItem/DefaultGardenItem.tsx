import { useGardenContext } from '../Garden';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
interface DefaultGardenItemProps {
	columnExpanded: boolean;
	isSelected: boolean;
	item: Record<string, string>;
	depth: number;
}

export const DefaultGardenItem = ({ columnExpanded, isSelected, item, depth }: DefaultGardenItemProps): JSX.Element => {
	const controller = useGardenContext();
	const {
		clickEvents: { onClickItem },
		visuals: { getCustomItemColor, getCustomDescription },
	} = controller;

	const label = controller.nodeLabelCallback(item, controller);

	const color = (getCustomItemColor && getCustomItemColor(item, controller)) ?? 'grey';

	const description = getCustomDescription && getCustomDescription(item, controller);

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
