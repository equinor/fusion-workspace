import { GardenBlock } from '../components/VirtualGarden';
import { useGroupingKeys } from './useGroupingKeys';
import { useQueries } from '@tanstack/react-query';
import { GetBlockRequestArgs } from '../types';

type UseBlockCacheArgs<T, TContext = undefined> = {
  blocks: GardenBlock[];
  blocksInView: GardenBlock[];
  blockSqrt: number;
  getBlockAsync: (args: GetBlockRequestArgs, context: TContext, signal: AbortSignal) => Promise<T[]>;
  context: TContext;
  hash: string[];
};

export function useBlockCache<T, TContext = undefined>({
  blockSqrt,
  blocks,
  blocksInView,
  context,
  getBlockAsync,
  hash,
}: UseBlockCacheArgs<T, TContext>) {
  const keys = useGroupingKeys();

  const blockCache = useQueries({
    queries: blocks.map((block) => ({
      /** Unique identifier for blocks, add state here to invalidate query onChange */
      queryKey: [keys.gardenKey, ...keys.groupByKeys, `x${block.x}`, `y${block.y}`, context, ...hash],
      /** Only fetch if block is in view */
      enabled: !!blocksInView.find((s) => s.x === block.x && s.y === block.y),
      /** Annoying default in react-query */
      refetchOnWindowFocus: false,
      queryFn: async (s) => {
        const { signal } = s as { signal: AbortSignal };

        //fetch block with coordinates of block x and block y
        const coordinates = getBlockIndexes(block, blockSqrt);

        return getBlockAsync(
          { ...coordinates, groupingKeys: [keys.gardenKey.toString(), ...keys.groupByKeys] },
          context,
          signal
        );
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
    columnStart: b.x * sqrt,
    columnEnd: b.x * sqrt + sqrt - 1,
    rowStart: b.y * sqrt,
    rowEnd: b.y * sqrt + sqrt - 1,
  };
}
