import { useMemo, useRef, useCallback } from 'react';
import { useVirtual } from 'react-virtual';
import { FilterGroup } from '../../types';
import {
  StyledVirtualFilterContainer,
  StyledVirtualFilterItemWrapper,
} from '../expandedFilterGroup/expandedFilterGroup.styles';
import { FilterItemValue } from '../expandedFilterItem/ExpandedFilterItem';
import { searchByValue } from '../expandedFilterGroup/ExpandedFilterGroup';

interface VirtualContainerProps {
  filterGroup: FilterGroup;
  filterSearchValue: string;
}

export const VirtualContainer = ({ filterGroup, filterSearchValue }: VirtualContainerProps): JSX.Element | null => {
  const groupsMatchingSearch = searchByValue(filterGroup.values, filterSearchValue);
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
              key={groupsMatchingSearch[virtualRow.index]}
              virtualRowSize={virtualRow.size}
              virtualRowStart={virtualRow.start}
              filterItem={groupsMatchingSearch[virtualRow.index]}
              filterGroup={filterGroup}
            />
          );
        })}
      </StyledVirtualFilterItemWrapper>
    </StyledVirtualFilterContainer>
  );
};
