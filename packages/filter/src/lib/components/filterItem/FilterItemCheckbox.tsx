import { Checkbox } from '@equinor/eds-core-react';
import { FilterValueType } from '../../types';
import { StyledCount, StyledFilterItemWrap, StyledFilterLabelWrapper } from './filterItem.styles';
import { Skeleton } from '../skeleton/Skeleton';

export interface FilterItemCheckboxProps {
  filterValue: FilterValueType;
  handleFilterItemClick: () => void;
  handleFilterItemLabelClick: () => void;
  isChecked: boolean;
  ValueRender: () => JSX.Element;
  count?: number;
  isFetching: boolean;
}

export const FilterItemCheckbox = ({
  count,
  filterValue,
  handleFilterItemClick,
  isChecked,
  handleFilterItemLabelClick,
  ValueRender,
  isFetching,
}: FilterItemCheckboxProps): JSX.Element => {
  return (
    <StyledFilterItemWrap title={typeof filterValue === 'string' ? filterValue : '(Blank)'} key={filterValue.value}>
      <Checkbox disabled={isFetching} onChange={handleFilterItemClick} size={12} checked={!isChecked} />
      <StyledFilterLabelWrapper onClick={handleFilterItemLabelClick}>
        <ValueRender />
      </StyledFilterLabelWrapper>
      {isFetching ? (
        <Skeleton height={18} width={32} />
      ) : (
        typeof count === 'number' && <StyledCount>({count})</StyledCount>
      )}
    </StyledFilterItemWrap>
  );
};
