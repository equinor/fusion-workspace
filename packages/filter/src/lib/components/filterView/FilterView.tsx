import { useFilterController } from '../../hooks/useFilterContext';
import { FilterGroup } from '../../types';
import { ExpandedFilterGroup } from '../ExpandedFilterGroup/ExpandedFilterGroup';
import { FilterGroups, FilterGroupWrapper, Wrapper } from './filterView.styles';

interface FilterViewProps {
    visibleFilterGroups: string[];
}

export const FilterView = ({ visibleFilterGroups }: FilterViewProps): JSX.Element => {
    const { getGroupValues } = useFilterController();

    return (
        <Wrapper>
            <FilterGroups>
                {visibleFilterGroups
                    .map(
                        (groupName): FilterGroup => ({
                            name: groupName,
                            values: getGroupValues(groupName),
                        })
                    )
                    .map((filterGroup, index) => (
                        <FilterGroupWrapper key={`col-${filterGroup.name}-${index}`}>
                            <ExpandedFilterGroup filterGroup={filterGroup} />
                        </FilterGroupWrapper>
                    ))}
            </FilterGroups>
        </Wrapper>
    );
};
