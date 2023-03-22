import { GardenBlock } from '../components/VirtualGarden';
import { VirtualItem } from 'react-virtual';

type BlockArgs = {
  rowCount: number;
  blockSqrt: number;
  columnCount: number;
};

/**
 * Creates an array of blocks for the total size of the area
 */
export function makeBlocks({ blockSqrt, columnCount, rowCount }: BlockArgs) {
  const blocks: GardenBlock[] = [];

  for (let i = 0; i < rowCount / blockSqrt; i++) {
    for (let j = 0; j < columnCount / blockSqrt; j++) {
      const block = {
        x: j,
        y: i,
      };
      blocks.push(block);
    }
  }
  return blocks;
}

export function getCoordinatesInView(xItems: VirtualItem[], yItems: VirtualItem[]) {
  /** Start index on the x-axis  */
  const xStart = xItems[0].index;
  /** End index on the x-axis  */
  const xEnd = xItems[xItems.length - 1].index;
  /** Start index on the y-axis  */
  const yStart = Math.min(...yItems.map((s) => s.index));
  /** End index on the y-axis  */
  const yEnd = Math.max(...yItems.map((s) => s.index));
  return {
    xStart,
    xEnd,
    yStart,
    yEnd,
  };
}
