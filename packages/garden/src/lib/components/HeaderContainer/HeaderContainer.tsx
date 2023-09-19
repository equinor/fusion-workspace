import { useCallback } from 'react';
import { VirtualItem } from 'react-virtual';
import { ActionType } from '../ExpandProvider';
import { Header, HeaderRoot } from './headerContainer.styles';
import { useExpand, useExpandDispatch } from '../../hooks/useExpand';
import { GardenHeaderGroup, GetHeaderBlockRequestArgs } from '../../types';
import { useBlockCache } from '../../hooks/useBlockCache';
import { findBlockCacheEntry, GardenBlock, getBlocksInView } from '../VirtualGarden';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';
import { makeBlocks } from '../../utils/gardenBlock';
import { useGardenConfig } from '../../hooks/useGardenConfig';
import { useGarden } from '../../hooks/useGarden';

type HeaderContainerProps<TContext = undefined> = {
  columnVirtualizer: { virtualItems: VirtualItem[] };
  highlightedColumn: number | undefined;
  blockSqrt: number;
  columnCount: number;
  columnStart: number;
  context: TContext;
  columnEnd: number;
  getHeader: (args: GetHeaderBlockRequestArgs, context: TContext, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;
};
export const HeaderContainer = <TContext,>({
  columnVirtualizer,
  highlightedColumn,
  blockSqrt,
  columnCount,
  columnEnd,
  columnStart,
  context,
  getHeader,
}: HeaderContainerProps<TContext>): JSX.Element => {
  const blocks = makeBlocks({ blockSqrt, columnCount, rowCount: 1 });
  const blocksInView = getBlocksInView(columnStart, columnEnd, 0, 0, blockSqrt);
  const blockCache = useBlockCache({
    blocks: blocks,
    blocksInView: blocksInView,
    blockSqrt: blockSqrt,
    context: context,
    hash: ['header'],
    getBlockAsync: getHeader,
  });

  const {
    components: { customHeaderView: HeaderChild },
  } = useGardenConfig();

  const {
    groupingService: { groupingKeys },
  } = useGarden();

  const gardenKey = groupingKeys.at(0);

  const expandColumn = useExpandDispatch();
  const expanded = useExpand();
  const handleHeaderClick = useCallback(
    (index: number) => {
      expandColumn({
        type: ActionType.EXPAND_COLUMN,
        index,
      });
    },
    [expandColumn]
  );

  if (!HeaderChild) throw new Error('No header component registered');
  const getBlockCache = (block: GardenBlock) => findBlockCacheEntry(block, blocks, blockCache);
  return (
    <HeaderRoot>
      {columnVirtualizer.virtualItems.map((virtualColumn) => {
        const columnExpanded = !!expanded.expandedColumns.find((s) => s === virtualColumn.index);
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
            onClick={() => handleHeaderClick(virtualColumn.index)}
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
              columnIsExpanded={columnExpanded}
              groupByKey={gardenKey}
            />
          </Header>
        );
      })}
    </HeaderRoot>
  );
};
