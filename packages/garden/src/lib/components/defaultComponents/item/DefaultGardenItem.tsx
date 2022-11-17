import { memo, useMemo } from 'react';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
import { CustomItemView } from 'lib/types';

const GardenItem = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({
	columnExpanded,
	controller,
	data: item,
	isSelected,
	depth,
}: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) => {
	const {
		clickEvents: { onClickItem },
		visuals: { getDescription, getItemColor },
	} = controller;

	const { color, description, label } = useMemo(() => {
		const label = controller.nodeLabelCallback(item, controller as any);
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
			onClick={() => onClickItem && onClickItem(item, controller as any)}
			isSelected={isSelected}
			depth={depth ?? 0}
		>
			<div>{label}</div>
			{columnExpanded && <div>{description}</div>}
		</StyledDefaultPackage>
	);
};

export const DefaultGardenItem = memo(GardenItem);
