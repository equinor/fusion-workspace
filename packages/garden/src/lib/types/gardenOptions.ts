import { MemoExoticComponent, MutableRefObject } from 'react';
import { GardenGroup, GardenHeaderGroup } from '.';
import { GardenController } from '../classes';
import { GardenProp } from './gardenProp';

export interface CustomItemView<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  data: TData;
  controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
  onClick: () => void;
  columnExpanded: boolean;
  isSelected: boolean;
  rowStart: number;
  columnStart: number;
  parentRef: MutableRefObject<HTMLDivElement | null>;
  depth?: number;
  width?: number;
  colorAssistMode: boolean;
}

export interface CustomGroupView<TData extends Record<PropertyKey, unknown>> {
  data: GardenGroup<TData>;
  onClick: () => void;
  onSelect?: (item: TData) => void;
  onGroupeSelect?: (item: any) => void;
  columnExpanded: boolean;
  groupByKeys: (keyof TData | string)[];
}

export interface CustomHeaderView {
  header: GardenHeaderGroup;
  columnIndex: number;
  columnIsExpanded: boolean;
  groupByKey?: string;
}

export interface CustomVirtualViews<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
  customItemView?: MemoExoticComponent<
    (args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TContext>) => JSX.Element
  >;
  customGroupView?: MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
  customHeaderView?: MemoExoticComponent<(args: CustomHeaderView) => JSX.Element>;
  customGroupByView?: (
    props: CustomGroupViewProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>
  ) => JSX.Element;
}

export type CustomGroupViewProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string = never,
  TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
  TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
  controller: GardenProp<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};

export type PreGroupByFiltering<TData extends Record<PropertyKey, unknown>> = (
  arr: TData[],
  groupByKey: string
) => TData[];
