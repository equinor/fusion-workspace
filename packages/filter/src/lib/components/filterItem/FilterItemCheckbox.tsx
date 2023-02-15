import { Checkbox } from '@equinor/eds-core-react';
import { FilterValueType } from '../../types';
import { StyledCount, StyledFilterItemWrap, StyledFilterLabelWrapper } from './filterItem.styles';

export interface FilterItemCheckboxProps {
  filterValue: FilterValueType;
  handleFilterItemClick: () => void;
  handleFilterItemLabelClick: () => void;
  isChecked: boolean;
  ValueRender: () => JSX.Element;
  count?: number;
}

export const FilterItemCheckbox = ({
  count,
  filterValue,
  handleFilterItemClick,
  isChecked,
  handleFilterItemLabelClick,
  ValueRender,
}: FilterItemCheckboxProps): JSX.Element => {
  return (
    <StyledFilterItemWrap title={typeof filterValue === 'string' ? filterValue : '(Blank)'} key={filterValue}>
      <Checkbox onChange={handleFilterItemClick} size={12} checked={!isChecked} />
      <StyledFilterLabelWrapper onClick={handleFilterItemLabelClick}>
        <ValueRender />
      </StyledFilterLabelWrapper>
      {typeof count === 'number' && <StyledCount>({count})</StyledCount>}
    </StyledFilterItemWrap>
  );
};
