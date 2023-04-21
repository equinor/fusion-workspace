import { Checkbox } from '@equinor/eds-core-react';
import { VirtualItem } from 'react-virtual';
import { StyledFilterItemWrap, StyledFilterLabelWrapper, StyledCount } from './filterItem.styles';
import { FilterItemCheckboxProps } from './FilterItemCheckbox';

interface VirtualFilterItemCheckboxProps extends FilterItemCheckboxProps {
  virtualItem: VirtualItem;
}

export const VirtualFilterItemCheckbox = ({
  count,
  filterValue,
  handleFilterItemClick,
  isChecked,
  handleFilterItemLabelClick,
  ValueRender,
  virtualItem,
}: VirtualFilterItemCheckboxProps): JSX.Element => {
  return (
    <StyledFilterItemWrap
      title={typeof filterValue === 'string' ? filterValue : '(Blank)'}
      style={{
        transform: `translateY(${virtualItem.start}px)`,
        height: `${virtualItem.size}px`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      key={filterValue.value}
    >
      <Checkbox onChange={handleFilterItemClick} size={12} checked={!isChecked} />
      <StyledFilterLabelWrapper onClick={handleFilterItemLabelClick}>
        <ValueRender />
      </StyledFilterLabelWrapper>
      {typeof count === 'number' && <StyledCount>({count})</StyledCount>}
    </StyledFilterItemWrap>
  );
};
