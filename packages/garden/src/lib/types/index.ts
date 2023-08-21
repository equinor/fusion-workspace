export * from './gardenGroup';
export * from './gardenOptions';
export * from './gardenItem';
export * from './highlightedNode';
export * from './callbacks';
export * from './events';
export * from './visuals';
export * from './getIdentifier';

export type { GardenConfig } from './config';

export type GardenMeta = {
  columnStart: number | null;
  columnCount: number;
  rowCount: number;
  allGroupingOptions: GroupingOption[];
  validGroupingOptions: string[];
};

export type GetHeaderBlockRequestArgs = Pick<
  GetBlockRequestArgs,
  'columnStart' | 'columnEnd' | 'groupingKeys' | 'dimension' | 'type'
>;

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

  dimension: string | null;

  type: string | null;
};

export type GetSubgroupItemsArgs = {
  groupingKeys: string[];
  columnName: string;
  subgroupName: string;
  dimension: string | null;
  type: string | null;
};

export type GardenHeaderGroup = {
  name: string;
  count: number;
};

export type GroupingOption = {
  groupingKey: string;
  dimension: string[] | null;
  type: string[] | null;
};
