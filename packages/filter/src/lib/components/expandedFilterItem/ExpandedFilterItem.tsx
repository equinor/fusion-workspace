import { Checkbox } from '@equinor/eds-core-react';
import { memo } from 'react';
import { FilterGroup, FilterValueType } from '../../types';
import { StyledCount, StyledFilterItemName, StyledFilterItemWrap } from '../filterItem/filterItem.styles';
import { useFilterGroup } from '../../hooks/useFilterGroup';

type ExpandedFilterItemValueProps = {
  virtualRowStart: number;
  virtualRowSize: number;
  filterItem: FilterValueType;
  filterGroup: FilterGroup;
};

export const ExpandedFilterItem = ({
  virtualRowStart,
  virtualRowSize,
  filterItem,
  filterGroup,
}: ExpandedFilterItemValueProps): JSX.Element => {
  const { filterItemLabelClick, toggleItem, inactiveGroupValues } = useFilterGroup(filterGroup);

  function uncheckAllButThisValue() {
    filterItemLabelClick(filterItem);
  }

  const isUnChecked = inactiveGroupValues.includes(filterItem);
  //TODO: backend
  const count = 0;
  return (
    <StyledFilterItemWrap
      title={typeof filterItem === 'string' ? filterItem : '(Blank)'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        transform: `translateY(${virtualRowStart}px)`,
        height: `${virtualRowSize}px`,
      }}
    >
      <Checkbox checked={!isUnChecked} onChange={() => toggleItem(filterItem)} />
      <StyledFilterItemName onClick={uncheckAllButThisValue}>{filterItem}</StyledFilterItemName>
      {!isUnChecked && <StyledCount>({count})</StyledCount>}
    </StyledFilterItemWrap>
  );
};

export const FilterItemValue = memo(ExpandedFilterItem);
