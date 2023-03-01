import { tokens } from '@equinor/eds-tokens';
import { useRef, useCallback, memo } from 'react';
import { useVirtual } from 'react-virtual';
import styled from 'styled-components';
import { PowerBiFilterItem, ActiveFilter } from '../../types';
import { VirtualFilterItemCheckbox } from '../filterItemCheckbox/FilterItemCheckbox';

interface VirtualListProps {
  items: PowerBiFilterItem[];
  rowLength: number;
  checkedValues: ActiveFilter[];
  onClickFilter: (filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
}

export function VirtualList({ items, rowLength, checkedValues, onClickFilter }: VirtualListProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    parentRef: ref,
    size: rowLength,
    estimateSize: useCallback(() => 22, []),
  });

  return (
    <Parent ref={ref}>
      <VirtualRowWrapper
        style={{
          height: `${rowVirtualizer.totalSize}px`,
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const item = items[virtualRow.index];
          return (
            <FilterItemValue
              virtualItem={virtualRow}
              key={item.value}
              ValueRender={() => <div>{item.value}</div>}
              handleFilterItemLabelClick={() => onClickFilter(item, true)}
              filterValue={item.value}
              handleFilterItemClick={() => onClickFilter(item, false)}
              isChecked={!checkedValues.includes(item.value)}
            />
          );
        })}
      </VirtualRowWrapper>
    </Parent>
  );
}

const VirtualRowWrapper = styled.div`
  width: auto;
  min-width: 180px;
  position: relative;
`;

const FilterItemValue = memo(VirtualFilterItemCheckbox);

const Parent = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar-thumb {
    background: ${tokens.colors.ui.background__medium.hex};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${tokens.colors.ui.background__medium.hex};
  }
`;
