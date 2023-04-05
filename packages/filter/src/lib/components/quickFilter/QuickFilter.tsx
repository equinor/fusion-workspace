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
import { FilterDataSource, FilterGroup as IFilterGroup } from '../../types';
import { useFilterContext } from '../../context/filterContext';

/**
 * How to separate controller and visual logic in this component?
 */
interface QuickFilterProps {
  dataSource: FilterDataSource;
}

export function QuickFilter({ dataSource }: QuickFilterProps): JSX.Element {
  const { uncheckedValues, setFilterState, setUncheckedValues } = useFilterContext();

  const { data: groups } = useQuery(
    ['filter-meta'],
    ({ signal }): Promise<IFilterGroup[]> => dataSource.getFilterMeta(signal),
    {
      suspense: true,
      useErrorBoundary: true,
    }
  );

  useEffect(() => {
    if (!groups) return;

    setFilterState(getServerArgs(groups, uncheckedValues));
  }, [uncheckedValues]);

  const unCheckItem = (name: string, value: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === name);

    if (target !== -1) {
      setUncheckedValues((s) => [
        ...s.slice(0, target),
        { name: name, values: [...s[target].values, value], isQuickFilter: false },
        ...s.slice(target + 1),
      ]);
    } else {
      setUncheckedValues((s) => [...s, { name: name, values: [value], isQuickFilter: false }]);
    }
  };

  const checkItem = (name: string, value: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === name);
    if (target === -1) return;

    setUncheckedValues((s) => [
      ...s.slice(0, target),
      { name: name, values: [...s[target].values.filter((s) => s !== value)], isQuickFilter: false },
      ...s.slice(target + 1),
    ]);
  };

  /**
   * Check all in a group
   */
  const clearGroup = (name: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === name);
    if (target === -1) return;

    setUncheckedValues((s) => [...s.slice(0, target), ...s.slice(target + 1)]);
  };

  if (!groups) {
    throw new Error('SU');
  }

  const [filterGroupOpen, setFilterGroupOpen] = useState<string | null>(null);

  const handleExpandFilterGroup = (groupName: string) =>
    filterGroupOpen === groupName ? setFilterGroupOpen(null) : setFilterGroupOpen(groupName);

  const quickFilterGroups = groups?.filter(({ isQuickFilter }) => isQuickFilter);

  const filterGroups = groups.map((s) => s.name);

  const [visibleFilterGroups, setVisibleFilterGroups] = useState<string[]>(groups.map((s) => s.name));

  const toggleFilterIsExpanded = () => {
    // setIsFilterExpanded(!isFilterExpanded);
    setFilterGroupOpen(null);
  };

  const calculateHiddenFiltersApplied = () => 0;
  // groups.reduce(
  //   (acc, curr) => (!curr.isQuickFilter && getInactiveGroupValues(curr.name).length > 0 ? acc + 1 : acc),
  //   0
  // );

  return (
    <StyledWrapper id="filter_root">
      <StyledCompactFilterWrapper>
        <StyledSearchLine>
          <StyledLeftSection>
            <FilterQuickSearch />
          </StyledLeftSection>
          <StyledRightSection>
            {true && (
              <>
                {quickFilterGroups.map(
                  (group, i) =>
                    i < 5 && (
                      <FilterGroup
                        checkAll={() => clearGroup(group.name)}
                        isChecked={(item) =>
                          !!uncheckedValues.find((s) => s.name === group.name)?.values.includes(item)
                        }
                        handleFilterItemClick={(item) => {
                          const isUnchecked = uncheckedValues.find((s) => s.name === group.name)?.values.includes(item);
                          if (isUnchecked) {
                            console.log('checkign item');
                            checkItem(group.name, item);
                          } else {
                            unCheckItem(group.name, item);
                          }
                        }}
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
              {/* {isFilterExpanded && (
                <ToggleHideFilterPopover
                  allFilters={filterGroups}
                  setVisibleFilters={setVisibleFilterGroups}
                  visibleFilters={visibleFilterGroups}
                />
              )}

              <StyledButton onClick={() => clearActiveFilters()}>
                <FilterClearIcon isDisabled={!filterState.length} />
              </StyledButton>

              <StyledButton onClick={toggleFilterIsExpanded}>
                {isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
              </StyledButton> */}
            </div>
          </StyledRightSection>
        </StyledSearchLine>
      </StyledCompactFilterWrapper>
      {/* {isFilterExpanded && <FilterView visibleFilterGroups={visibleFilterGroups} />} */}
    </StyledWrapper>
  );
}
const getServerArgs = (groups: IFilterGroup[], filterState: IFilterGroup[]) =>
  groups.map(
    (group): IFilterGroup => ({
      name: group.name,
      isQuickFilter: false,
      values: group.values.filter((value) => !filterState.find((x) => x.name === group.name)?.values.includes(value)),
    })
  );
