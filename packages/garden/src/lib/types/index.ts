export * from './gardenGroup';
export * from './gardenOptions';
export * from './gardenItem';
export * from './highlightedNode';
export * from './keys';
export * from './callbacks';
export * from './events';
export * from './visuals';
export type { GardenConfig } from './config';
export * from './gardenProp';

export type GardenMeta = {
  columnStart: number | null;
  columnCount: number;
  rowCount: number;
  allGroupingOptions: string[];
  validGroupingOptions: string[];
};

export type GardenApi = {
  /** Call this to refetch */
  invalidate: () => void;
};

export type GetHeaderBlockRequestArgs = Pick<GetBlockRequestArgs, 'columnStart' | 'columnEnd' | 'groupingKeys'>;

export type GetBlockRequestArgs = {
  /**Column start */
  columnStart: number;
  /**Column end */
  columnEnd: number;
  /** Row start */
  rowStart: number;
  /** Row end */
  rowEnd: number;
  /** Grouping key */
  groupingKeys: string[];
};

export type GetSubgroupItemsArgs = {
  groupingKeys: string[];
  columnName: string;
  subgroupName: string;
};

export type GardenHeaderGroup = {
  name: string;
  count: number;
};
