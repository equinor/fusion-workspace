import { useMemo, useRef, useCallback } from 'react';
import { useVirtual } from 'react-virtual';
import { FilterGroup } from '../../types';
import {
  StyledVirtualFilterContainer,
  StyledVirtualFilterItemWrapper,
} from '../expandedFilterGroup/expandedFilterGroup.styles';
import { FilterItemValue } from '../expandedFilterItem/ExpandedFilterItem';
import { searchByValue } from '../expandedFilterGroup/ExpandedFilterGroup';
import { filterMonospaceWhitelist } from '../../utils';

interface VirtualContainerProps {
  filterGroup: FilterGroup;
  filterSearchValue: string;
  isFetching: boolean;
}

export const VirtualContainer = ({
  filterGroup,
  filterSearchValue,
  isFetching,
}: VirtualContainerProps): JSX.Element | null => {
  const groupsMatchingSearch = searchByValue(filterGroup.filterItems, filterSearchValue).filter((s) => s.count > 0);
  const rowLength = groupsMatchingSearch.length;
  const parentRef = useRef<HTMLDivElement | null>(null);

  const rowVirtualizer = useVirtual({
    parentRef,
    size: rowLength,
    estimateSize: useCallback(() => 20, []),
  });

  return (
    <StyledVirtualFilterContainer ref={parentRef}>
      <StyledVirtualFilterItemWrapper
        style={{
          height: `${rowVirtualizer.totalSize}px`,
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          return (
            <FilterItemValue
              isFetching={isFetching}
              key={groupsMatchingSearch[virtualRow.index].value}
              virtualRowSize={virtualRow.size}
              virtualRowStart={virtualRow.start}
              filterItem={groupsMatchingSearch[virtualRow.index]}
              filterGroup={filterGroup}
              isMonospace={filterMonospaceWhitelist.includes(filterGroup.name)}
            />
          );
        })}
      </StyledVirtualFilterItemWrapper>
    </StyledVirtualFilterContainer>
  );
};
