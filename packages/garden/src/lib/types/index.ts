export * from './gardenGroup';
export * from './fieldSettings';
export * from './gardenOptions';
export * from './gardenItem';
export * from './highlightedNode';
export * from './keys';
export * from './callbacks';
export * from './events';
export * from './visuals';
export type { GardenConfig } from './config';
export * from './customGeneric';
export * from './gardenProp';

export type GardenMeta = {
  columnStart: number | null;
  columnCount: number;
  rowCount: number;
  groupingOptions: string[];
};

export type GetBlockRequestArgs = {
  /**Column start */
  xStart: number;
  /**Column end */
  xEnd: number;
  /** Row start */
  yStart: number;
  /** Row end */
  yEnd: number;
  /** Grouping key */
  groupingKey: string;
};

export type GardenHeaderGroup = {
  name: string;
  count: number;
};
