import { Checkbox } from '@equinor/eds-core-react';
import { memo } from 'react';
import { FilterGroup, FilterValueType } from '../../types';
import { StyledCount, StyledFilterItemName, StyledFilterItemWrap } from '../filterItem/filterItem.styles';
import { useFilterGroup } from '../../hooks/useFilterGroup';
import { Skeleton } from '../skeleton/Skeleton';

type ExpandedFilterItemValueProps = {
  virtualRowStart: number;
  virtualRowSize: number;
  filterItem: FilterValueType;
  filterGroup: FilterGroup;
  isFetching: boolean;
  isMonospace: boolean;
};

export const ExpandedFilterItem = ({
  virtualRowStart,
  virtualRowSize,
  filterItem,
  isFetching,
  filterGroup,
  isMonospace,
}: ExpandedFilterItemValueProps): JSX.Element => {
  const { filterItemLabelClick, toggleItem, inactiveGroupValues } = useFilterGroup(filterGroup);

  function uncheckAllButThisValue() {
    filterItemLabelClick(filterItem);
  }

  const isUnChecked = inactiveGroupValues.includes(filterItem.value);

  return (
    <StyledFilterItemWrap
      title={filterItem.value ?? '(Blank)'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        transform: `translateY(${virtualRowStart}px)`,
        height: `${virtualRowSize}px`,
        fontVariantNumeric: isMonospace ? 'tabular-nums' : 'normal',
      }}
    >
      <Checkbox disabled={isFetching} checked={!isUnChecked} onChange={() => toggleItem(filterItem)} />
      <StyledFilterItemName onClick={uncheckAllButThisValue}>{filterItem.value}</StyledFilterItemName>
      {isFetching ? <Skeleton height={18} width={32} /> : <StyledCount>({filterItem.count})</StyledCount>}
    </StyledFilterItemWrap>
  );
};

export const FilterItemValue = memo(ExpandedFilterItem);
