import { memo, useMemo } from 'react';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
import { CustomItemView } from '../../../types';
import { Typography } from '@equinor/eds-core-react';

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
      <Typography as={'span'} title={label}>
        {label}
      </Typography>
      {columnExpanded && <div>{description}</div>}
    </StyledDefaultPackage>
  );
};

export const DefaultGardenItem = memo(GardenItem);
