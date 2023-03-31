import { useCallback } from 'react';
import { VirtualItem } from 'react-virtual';
import { ActionType } from '../ExpandProvider';
import { Header, HeaderRoot } from './headerContainer.styles';
import { useExpand, useExpandDispatch } from '../../hooks/useExpand';
import { getGardenItems } from '../../utils/getGardenItems';
import { GardenGroup, GardenHeaderGroup, GetHeaderBlockRequestArgs } from '../../types';
import { useGardenContext } from '../../hooks';
import { useBlockCache } from '../../hooks/useBlockCache';
import { findBlockCacheEntry, GardenBlock, getBlocksInView } from '../VirtualGarden';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';
import { makeBlocks } from '../../utils/gardenBlock';

type HeaderContainerProps = {
  columnVirtualizer: { virtualItems: VirtualItem[] };
  highlightedColumn: number | undefined;
  blockSqrt: number;
  columnCount: number;
  columnStart: number;
  columnEnd: number;
  getHeader: (args: GetHeaderBlockRequestArgs, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;
};
export const HeaderContainer = ({
  columnVirtualizer,
  highlightedColumn,
  blockSqrt,
  columnCount,
  columnEnd,
  columnStart,
  getHeader,
}: HeaderContainerProps): JSX.Element => {
  const blocks = makeBlocks({ blockSqrt, columnCount, rowCount: 1 });
  const blocksInView = getBlocksInView(columnStart, columnEnd, 0, 0, blockSqrt);
  const blockCache = useBlockCache(blocks, blocksInView, blockSqrt, (args, signal) => getHeader(args, signal), [
    'header',
  ]);

  const controller = useGardenContext();
  const {
    visuals,
    customViews: { customHeaderView: HeaderChild },

    grouping: {
      value: { horizontalGroupingAccessor: groupByKey },
    },
  } = controller;

  const expandColumn = useExpandDispatch();
  const expanded = useExpand();

  const handleHeaderClick = useCallback(
    (index: number, column: GardenGroup<Record<PropertyKey, unknown>>) => {
      expandColumn({
        type: ActionType.EXPAND_COLUMN,
        index,
        key: column.columnName,
        descriptionData: getGardenItems(column),
        customDescription: visuals.getDescription,
      });
    },
    [expandColumn, getGardenItems]
  );

  if (!HeaderChild) throw new Error('No header component registered');
  const getBlockCache = (block: GardenBlock) => findBlockCacheEntry(block, blocks, blockCache);
  return (
    <HeaderRoot>
      {columnVirtualizer.virtualItems.map((virtualColumn) => {
        const blockXIndex = Math.floor(virtualColumn.index / blockSqrt);
        /** Find current blocks yIndex */

        /** Get query entry for current block */
        const { isLoading, data, error, refetch } = getBlockCache({ x: blockXIndex, y: 0 });

        if (isLoading) {
          return (
            <Header
              style={{
                width: `${virtualColumn.size}px`,
                transform: `translateX(${virtualColumn.start}px) translateY(0px)`,
                backgroundColor: '#f7f7f7',
              }}
              key={virtualColumn.key}
            >
              <SkeletonPackage height={35} width={200} />
            </Header>
          );
        }

        if (error || !data) {
          // TODO: fix
          return <div key={virtualColumn.key}>rip</div>;
        }

        const header = data[virtualColumn.index % blockSqrt];

        const isHighlighted = highlightedColumn === virtualColumn.index;
        return (
          <Header
            /**TODO: fix handle expand */
            // onClick={() => handleHeaderClick(virtualColumn.index, header)}
            style={{
              width: `${virtualColumn.size}px`,
              transform: `translateX(${virtualColumn.start}px) translateY(0px)`,
              backgroundColor: isHighlighted ? '#007079' : '#f7f7f7',
              color: isHighlighted ? 'white' : 'black',
            }}
            key={virtualColumn.key}
          >
            <HeaderChild
              header={header}
              columnIndex={virtualColumn.index}
              columnIsExpanded={false}
              groupByKey={groupByKey as string}
            />
          </Header>
        );
      })}
    </HeaderRoot>
  );
};
