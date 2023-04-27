import { useEffect, useState } from 'react';

import {
  StyledCompactFilterWrapper,
  StyledLeftSection,
  StyledRightSection,
  StyledSearchLine,
  StyledWrapper,
} from './quickFilter.styles';
import { FilterGroup } from '../filterGroup';
import { FilterQuickSearch } from '../filterQuickSearch/FilterQuickSearch';

import { FiltersAppliedInfo } from '../filtersAppliedInfo/FiltersAppliedInfo';
import { useQuery } from '@tanstack/react-query';
import { FilterDataSource, FilterStateGroup, FilterGroup as IFilterGroup } from '../../types';
import { useFilterContext } from '../../context/filterContext';
import { StyledButton } from '../toggleHideFilterPopover/toggleHideFilterPopover.styles';
import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';
import { ToggleHideFilterPopover } from '../toggleHideFilterPopover/ToggleHideFilterPopover';
import { FilterView } from '../filterView/FilterView';

/**
 * How to separate controller and visual logic in this component?
 */
interface QuickFilterProps {
  dataSource: FilterDataSource;
}

export function QuickFilter({ dataSource }: QuickFilterProps): JSX.Element {
  const { uncheckedValues, setFilterState, setUncheckedValues, filterState } = useFilterContext();
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const { data: groups, isFetching } = useQuery(
    ['filter-meta', JSON.stringify(filterState)],
    ({ signal }): Promise<IFilterGroup[]> => dataSource.getFilterMeta(filterState, signal),
    {
      suspense: true,
      keepPreviousData: true,
      useErrorBoundary: true,
    }
  );

  useEffect(() => {
    if (!groups) return;

    setFilterState(getServerArgs(groups, uncheckedValues));
  }, [uncheckedValues]);

  if (!groups) {
    throw new Error('Fix suspense');
  }

  const [filterGroupOpen, setFilterGroupOpen] = useState<string | null>(null);

  const handleExpandFilterGroup = (groupName: string) =>
    filterGroupOpen === groupName ? setFilterGroupOpen(null) : setFilterGroupOpen(groupName);

  const quickFilterGroups = groups?.filter(({ isQuickFilter }) => isQuickFilter);

  const filterGroups = groups.map((s) => s.name);

  const [visibleFilterGroups, setVisibleFilterGroups] = useState<string[]>(groups.map((s) => s.name));

  const toggleFilterIsExpanded = () => {
    setIsFilterExpanded(!isFilterExpanded);
    setFilterGroupOpen(null);
  };

  const clearActiveFilters = () => {
    setUncheckedValues([]);
  };

  const getInactiveGroupValues = (groupName: string) => {
    return uncheckedValues.find((s) => s.name === groupName)?.values ?? [];
  };

  const calculateHiddenFiltersApplied = () =>
    groups.reduce(
      (acc, curr) => (!curr.isQuickFilter && getInactiveGroupValues(curr.name).length > 0 ? acc + 1 : acc),
      0
    );

  return (
    <StyledWrapper id="filter_root">
      <StyledCompactFilterWrapper>
        <StyledSearchLine>
          <StyledLeftSection>
            <FilterQuickSearch />
          </StyledLeftSection>
          <StyledRightSection>
            {!isFilterExpanded && (
              <>
                {quickFilterGroups.map(
                  (group, i) =>
                    i < 5 && (
                      <FilterGroup
                        isFetching={isFetching}
                        uncheckedValues={uncheckedValues.find((s) => s.name === group.name)?.values ?? []}
                        onClick={() => handleExpandFilterGroup(group.name)}
                        group={group}
                        key={group.name}
                        isOpen={filterGroupOpen === group.name}
                        name={group.name}
                      />
                    )
                )}
                <FiltersAppliedInfo activeFilters={calculateHiddenFiltersApplied()} />
              </>
            )}
            <div style={{ display: 'flex' }}>
              {isFilterExpanded && (
                <ToggleHideFilterPopover
                  allFilters={filterGroups}
                  setVisibleFilters={setVisibleFilterGroups}
                  visibleFilters={visibleFilterGroups}
                />
              )}

              <StyledButton onClick={() => clearActiveFilters()}>
                <FilterClearIcon isDisabled={uncheckedValues.map((s) => s.values).flat().length === 0} />
              </StyledButton>

              <StyledButton onClick={toggleFilterIsExpanded}>
                {isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
              </StyledButton>
            </div>
          </StyledRightSection>
        </StyledSearchLine>
      </StyledCompactFilterWrapper>
      {isFilterExpanded && (
        <FilterView isFetching={isFetching} groups={groups.filter((s) => visibleFilterGroups.includes(s.name))} />
      )}
    </StyledWrapper>
  );
}
const getServerArgs = (groups: IFilterGroup[], filterState: FilterStateGroup[]) =>
  groups.map(
    (group): FilterStateGroup => ({
      name: group.name,
      values: group.filterItems
        .map((s) => s.value)
        .filter((value) => !filterState.find((x) => x.name === group.name)?.values.includes(value)),
    })
  );
