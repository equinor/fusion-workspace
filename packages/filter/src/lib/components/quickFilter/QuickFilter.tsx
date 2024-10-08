import { useState } from 'react';

import {
  StyledQuickFilterGroupsLayout,
  StyledCompactFilterWrapper,
  StyledWrapper,
  StyledButtonWrapper,
} from './quickFilter.styles';
import { FilterGroup } from '../filterGroup';
import { FilterQuickSearch } from '../filterQuickSearch/FilterQuickSearch';

import { FiltersAppliedInfo } from '../filtersAppliedInfo/FiltersAppliedInfo';
import { FilterGroup as IFilterGroup } from '../../types';
import { useFilterContext } from '../../context/filterContext';
import { StyledButton, StyledButtonContent } from '../toggleHideFilterPopover/toggleHideFilterPopover.styles';
import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';
import { ToggleHideFilterPopover } from '../toggleHideFilterPopover/ToggleHideFilterPopover';
import { FilterView } from '../filterView/FilterView';
import { useFilterStyles } from '../../hooks/useFilterStyles';
import { FilterLoadingFallback } from '../Filter';
import { Button, Tooltip } from '@equinor/eds-core-react';

/**
 * How to separate controller and visual logic in this component?
 */

export function QuickFilter(): JSX.Element {
  const { query } = useFilterContext();

  const { data: groups, isLoading } = query;

  if (isLoading) {
    return <FilterLoadingFallback />;
  }

  if (!groups) {
    throw new Error('Filter failed to load');
  }
  //TODO: new component here to wrap with loading
  return <QuickFilterReady groups={groups} />;
}

type QuickFilterReadyProps = {
  groups: IFilterGroup[];
};

type FilterGroups = {
  groupName: string;
  isVisible: boolean;
};

const QuickFilterReady = ({ groups }: QuickFilterReadyProps) => {
  const { query, setUncheckedValues, uncheckedValues } = useFilterContext();
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [allFilterGroups, setFilterOrder] = useState<FilterGroups[]>(
    groups.map((s) => ({ groupName: s.name, isVisible: true }))
  );
  const [filterGroupOpen, setFilterGroupOpen] = useState<string | null>(null);
  const handleExpandFilterGroup = (groupName: string) =>
    filterGroupOpen === groupName ? setFilterGroupOpen(null) : setFilterGroupOpen(groupName);

  const quickFilterGroups = groups?.filter(({ isQuickFilter }) => isQuickFilter);

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

  const styles = useFilterStyles();
  const monospaceGroups = styles?.monospaceGroups ?? [];

  return (
    <StyledWrapper id="filter_root">
      <StyledCompactFilterWrapper isExpanded={isFilterExpanded}>
        <FilterQuickSearch />

        {!isFilterExpanded && (
          <>
            <StyledQuickFilterGroupsLayout>
              {quickFilterGroups.map((group, i) => (
                <FilterGroup
                  isFetching={query.isFetching}
                  uncheckedValues={uncheckedValues.find((s) => s.name === group.name)?.values ?? []}
                  onClick={() => handleExpandFilterGroup(group.name)}
                  group={group}
                  key={group.name}
                  isOpen={filterGroupOpen === group.name}
                  name={group.name}
                  isMonospace={
                    !!monospaceGroups.find((value) => value.trim().toLowerCase() === group.name.trim().toLowerCase())
                  }
                />
              ))}
            </StyledQuickFilterGroupsLayout>
          </>
        )}
        <StyledButtonWrapper>
          <FiltersAppliedInfo activeFilters={calculateHiddenFiltersApplied()} />
          {isFilterExpanded && <ToggleHideFilterPopover allFilters={allFilterGroups} setFilterOrder={setFilterOrder} />}

          <Tooltip title="Clear all active filters">
            <StyledButton onClick={() => clearActiveFilters()}>
              <FilterClearIcon isDisabled={uncheckedValues.map((s) => s.values).flat().length === 0} />
            </StyledButton>
          </Tooltip>

          <Tooltip title={isFilterExpanded ? 'Hide all filter options' : 'Show all filter options'}>
            <Button variant="ghost" onClick={toggleFilterIsExpanded}>
              {isFilterExpanded ? (
                <StyledButtonContent>
                  <FilterCollapseIcon /> <div>Hide all</div>
                </StyledButtonContent>
              ) : (
                <StyledButtonContent>
                  <FilterExpandIcon /> <div>Show all</div>
                </StyledButtonContent>
              )}
            </Button>
          </Tooltip>
        </StyledButtonWrapper>
      </StyledCompactFilterWrapper>
      {isFilterExpanded && (
        <FilterView
          isFetching={query.isFetching}
          groups={
            allFilterGroups
              .map((x) => groups.find((s) => s.name === x.groupName && x.isVisible === true))
              .filter(Boolean) as IFilterGroup[]
          }
        />
      )}
    </StyledWrapper>
  );
};
