import { FilterGroup } from '../../types';
import { ExpandedFilterGroup } from '../expandedFilterGroup/ExpandedFilterGroup';
import { StyledFilterGroups, StyledFilterGroupWrapper, StyledWrapper } from './filterView.styles';

interface FilterViewProps {
  groups: FilterGroup[];
}

export const FilterView = ({ groups }: FilterViewProps): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledFilterGroups>
        {groups.map((filterGroup, index) => (
          <StyledFilterGroupWrapper key={`col-${filterGroup.name}-${index}`}>
            <ExpandedFilterGroup filterGroup={filterGroup} />
          </StyledFilterGroupWrapper>
        ))}
      </StyledFilterGroups>
    </StyledWrapper>
  );
};
