import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useVirtual } from 'react-virtual';
import { ActiveFilter, PowerBiFilter, PowerBiFilterItem } from '../../types';
import { searchFilterItems } from '../../utils/searchFilterItems';
import { FilterController } from '../Filter/Filter';
import { Item } from '../filterItem/FilterItem';
import { Header } from '../Header/Header';
import { StyledCheckboxWrap, StyledFilterGroupContainer, StyledVirtualFilterItemWrapper } from './filterItems.styles';

type FilterItemsProps = {
  handleOnChange: (group: PowerBiFilter, filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
  handleOnSelectAll: (
    group: PowerBiFilter,
    filter: PowerBiFilterItem,
    allVisibleFilterValues: string[]
  ) => Promise<void>;
  activeFilters: Record<string, ActiveFilter[]>;
  group: PowerBiFilter;
  controller: FilterController;
};

export const FilterItems = ({
  handleOnChange,
  handleOnSelectAll,
  activeFilters,
  controller,
  group,
}: FilterItemsProps): JSX.Element | null => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const handleOnSearchChange = (value: string | undefined) => {
    setSearchValue(value);
  };

  const filterValues = Object.values(group?.value ?? '(Blank)');
  const searchedFilterItems = useMemo(() => searchFilterItems(filterValues, searchValue), [filterValues, searchValue]);
  const handleEnterPress = () => {
    handleOnSelectAll(
      group,
      filterValues[0],
      searchedFilterItems.map((s) => s?.value ?? '(Blank)')
    );
    handleOnSearchChange('');
  };

  const rowLength = useMemo(() => searchedFilterItems.length, [searchedFilterItems]);
  const rowVirtualizer = useVirtual({
    size: rowLength,
    estimateSize: useCallback(() => 25, []),
    parentRef,
  });

  return (
    <StyledFilterGroupContainer>
      <Header
        searchValue={searchValue}
        handleEnterPress={handleEnterPress}
        title={group.type}
        hasActiveFilters={Boolean(activeFilters[group.type].length)}
        controller={controller}
        deselectAllValues={() => controller.deselectAllValues(group, filterValues[0])}
        onSearch={handleOnSearchChange}
        searchEnabled={group.filterVals.length > 7}
      />
      <StyledCheckboxWrap ref={parentRef}>
        <StyledVirtualFilterItemWrapper style={{ height: `${rowVirtualizer.totalSize}px` }}>
          {rowVirtualizer.virtualItems.map((virtualItem) => {
            const filter = searchedFilterItems[virtualItem.index];
            return (
              <Item
                activeFilters={activeFilters[filter.type] || []}
                filter={filter}
                group={group}
                handleOnChange={handleOnChange}
                key={filter.value}
                virtualItemSize={virtualItem.size}
                virtualItemStart={virtualItem.start}
              />
            );
          })}
        </StyledVirtualFilterItemWrapper>
      </StyledCheckboxWrap>
    </StyledFilterGroupContainer>
  );
};
