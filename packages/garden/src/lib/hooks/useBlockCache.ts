import { GardenBlock, GetBlockRequestArgs } from '../components/VirtualGarden';
import { useGroupingKeys } from './useGroupingKeys';
import { useQueries } from '@tanstack/react-query';
import { GardenGroup } from '../types';

export function useBlockCache<TData extends Record<PropertyKey, unknown>>(
  blocks: GardenBlock[],
  blocksInView: GardenBlock[],
  blockSqrt: number,
  getBlockAsync: (args: GetBlockRequestArgs, signal: AbortSignal) => Promise<GardenGroup<TData>[]>
) {
  const keys = useGroupingKeys();

  const blockCache = useQueries({
    queries: blocks.map((block) => ({
      /** Unique identifier for blocks, add state here to invalidate query onChange */
      queryKey: [keys.gardenKey, ...keys.groupByKeys, `x${block.x}`, `y${block.y}`],
      /** Only fetch if block is in view */
      enabled: !!blocksInView.find((s) => s.x === block.x && s.y === block.y),
      /** Annoying default in react-query */
      refetchOnWindowFocus: false,
      /** Never refetch unless keys change */
      staleTime: Infinity,
      /** Remove from queryCache when keys change */
      cacheTime: 0,
      queryFn: async (s) => {
        const { signal } = s as { signal: AbortSignal };

        //fetch block with coordinates of block x and block y
        const coordinates = getBlockIndexes(block, blockSqrt);

        return getBlockAsync({ ...coordinates, groupingKey: keys.gardenKey.toString() }, signal);
      },
    })),
  });

  return blockCache;
}

/**
 * Get item indexes for block
 * @param b - Block to find indexes for
 * @param sqrt - Square root of block size
 */
function getBlockIndexes(b: GardenBlock, sqrt: number) {
  return {
    xStart: b.x * sqrt,
    xEnd: b.x * sqrt + sqrt - 1,
    yStart: b.y * sqrt,
    yEnd: b.y * sqrt + sqrt - 1,
  };
}
