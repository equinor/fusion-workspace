import { memo, useMemo } from 'react';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
import { CustomItemView } from '../../../types';

const GardenItem = <
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({
	columnExpanded,
	controller,
	data: item,
	isSelected,
	depth,
}: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => {
	const { onClickItem, getDisplayName, getItemColor, getDescription } = controller;

	const { color, description, label } = useMemo(() => {
		const label = getDisplayName(item);
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
			onClick={() => onClickItem && onClickItem(item)}
			isSelected={isSelected}
			depth={depth ?? 0}
		>
			<div>{label}</div>
			{columnExpanded && <div>{description}</div>}
		</StyledDefaultPackage>
	);
};

export const DefaultGardenItem = memo(GardenItem);
