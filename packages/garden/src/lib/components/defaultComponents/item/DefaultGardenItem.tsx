import { memo, useMemo } from 'react';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
import { CustomItemView } from '../../../types';
import { Typography } from '@equinor/eds-core-react';

const GardenItem = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
>({
  columnExpanded,
  controller,
  data: item,
  isSelected,
  depth,
  onClick,
}: CustomItemView<TData, TContext>) => {
  const {
    getDisplayName,
    visuals: { getItemColor, getDescription },
  } = controller;

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
    <StyledDefaultPackage bgColor={color} onClick={onClick} isSelected={isSelected} depth={depth ?? 0}>
      <Typography as={'span'} title={label}>
        {label}
      </Typography>
      {columnExpanded && <div>{description}</div>}
    </StyledDefaultPackage>
  );
};

export const DefaultGardenItem = memo(GardenItem);
