import { memo } from 'react';
import { StyledDefaultPackage } from './defaultGardenItem.styles';
import { CustomItemView } from '../../../types';
import { Typography } from '@equinor/eds-core-react';

const GardenItem = <TData extends Record<PropertyKey, unknown>>({
  columnExpanded,
  isSelected,
  depth,
  onClick,
  color,
  description,
  displayName,
}: CustomItemView<TData>) => {
  return (
    <StyledDefaultPackage bgColor={color} onClick={onClick} isSelected={isSelected} depth={depth ?? 0}>
      <Typography as={'span'} title={displayName}>
        {displayName}
      </Typography>
      {columnExpanded && <div>{description}</div>}
    </StyledDefaultPackage>
  );
};

export const DefaultGardenItem = memo(GardenItem);
