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
  columnWidth?: number;
};

export type GetHeaderBlockRequestArgs = Pick<
  GetBlockRequestArgs,
  'columnStart' | 'columnEnd' | 'groupingKeys' | 'timeInterval' | 'dateVariant'
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

  timeInterval: string | null;

  dateVariant: string | null;
};

export type GetSubgroupItemsArgs = {
  groupingKeys: string[];
  columnName: string;
  subgroupName: string;
  timeInterval: string | null;
  dateVariant: string | null;
};

export type GardenHeaderGroup = {
  name: string;
  count: number;
};

export type GroupingOption = {
  groupingKey: string;
  timeInterval: string[] | null;
  dateVariant: string[] | null;
};
