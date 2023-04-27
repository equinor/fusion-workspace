import { FilterGroup } from '../../types';
import { ExpandedFilterGroup } from '../expandedFilterGroup/ExpandedFilterGroup';
import { StyledFilterGroups, StyledFilterGroupWrapper, StyledWrapper } from './filterView.styles';

interface FilterViewProps {
  groups: FilterGroup[];
  isFetching: boolean;
}

export const FilterView = ({ groups, isFetching }: FilterViewProps): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledFilterGroups>
        {groups.map((filterGroup, index) => (
          <StyledFilterGroupWrapper key={`col-${filterGroup.name}-${index}`}>
            <ExpandedFilterGroup isFetching={isFetching} filterGroup={filterGroup} />
          </StyledFilterGroupWrapper>
        ))}
      </StyledFilterGroups>
    </StyledWrapper>
  );
};
