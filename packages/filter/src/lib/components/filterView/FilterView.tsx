import { FilterGroup } from '../../types';
import { ExpandedFilterGroup } from '../expandedFilterGroup/ExpandedFilterGroup';
import { StyledFilterGroups, StyledFilterGroupWrapper, StyledWrapper } from './filterView.styles';

interface FilterViewProps {
  visibleFilterGroups: string[];
}

export const FilterView = ({ visibleFilterGroups }: FilterViewProps): JSX.Element => {
  return (
    <StyledWrapper>
      {/* <StyledFilterGroups>
        {visibleFilterGroups
          .map(
            (groupName): FilterGroup => ({
              name: groupName,
              values: getGroupValues(groupName),
            })
          )
          .map((filterGroup, index) => (
            <StyledFilterGroupWrapper key={`col-${filterGroup.name}-${index}`}>
              <ExpandedFilterGroup filterGroup={filterGroup} />
            </StyledFilterGroupWrapper>
          ))}
      </StyledFilterGroups> */}
    </StyledWrapper>
  );
};
