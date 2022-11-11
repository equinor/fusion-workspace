import React, { MemoExoticComponent, MutableRefObject } from 'react';
import { GardenController } from '../classes';
import { GardenGroup, GardenGroups } from '.';

export interface CustomItemView<TData, TExtendedFields extends string, TCustomGroupByKeys, TCustomState, TContext> {
	data: TData;
	controller: Omit<GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>, 'destroy'>;
	onClick: () => void;
	columnExpanded: boolean;
	isSelected: boolean;
	rowStart: number;
	columnStart: number;
	parentRef: MutableRefObject<HTMLDivElement | null>;
	depth?: number;
	width?: number;
}

export interface CustomGroupView<TData> {
	data: GardenGroup<TData>;
	onClick: () => void;
	onSelect?: (item: TData) => void;
	onGroupeSelect?: (item: any) => void;
	columnExpanded: boolean;
	groupByKeys: (keyof TData | string)[];
}

export interface CustomHeaderView<T> {
	garden: GardenGroups<T>;
	columnIndex: number;
	columnIsExpanded: boolean;
	groupByKey?: string;
}

export interface CustomVirtualViews<TData, TExtendedFields extends string, TCustomGroupByKeys, TCustomState, TContext> {
	customItemView?: MemoExoticComponent<
		(args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) => JSX.Element
	>;
	customGroupView?: MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
	customHeaderView?: MemoExoticComponent<(args: CustomHeaderView<TData>) => JSX.Element>;
	customGroupByView?: React.FC;
}

export type PreGroupByFiltering<T = unknown> = (arr: T[], groupByKey: string) => T[];
