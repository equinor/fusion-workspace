import React, { MemoExoticComponent, MutableRefObject } from 'react';
import { GardenController } from '../classes';
import { GardenGroup, GardenGroups } from '.';

export interface CustomItemView<T> {
	data: T;
	controller: GardenController<T>;
	onClick: () => void;
	columnExpanded: boolean;
	isSelected: boolean;
	rowStart: number;
	columnStart: number;
	parentRef: MutableRefObject<HTMLDivElement | null>;
	depth?: number;
	width?: number;
}

export interface CustomGroupView<T> {
	data: GardenGroup<T>;
	onClick: () => void;
	onSelect?: (item: T) => void;
	onGroupeSelect?: (item: any) => void;
	columnExpanded: boolean;
	groupByKeys: (keyof T)[];
}

export interface CustomHeaderView<T> {
	garden: GardenGroups<T>;
	columnIndex: number;
	columnIsExpanded: boolean;
	groupByKey?: string;
}

export interface CustomVirtualViews<T> {
	customItemView?: MemoExoticComponent<(args: CustomItemView<T>) => JSX.Element>;
	customGroupView?: MemoExoticComponent<(args: CustomGroupView<T>) => JSX.Element>;
	customHeaderView?: MemoExoticComponent<(args: CustomHeaderView<T>) => JSX.Element>;
	customGroupByView?: React.FC;
}

export type PreGroupByFiltering<T = unknown> = (arr: T[], groupByKey: string) => T[];
