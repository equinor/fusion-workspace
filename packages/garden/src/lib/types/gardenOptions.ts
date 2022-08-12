import React, { MemoExoticComponent, MutableRefObject } from 'react';
import { GardenController } from '../classes';
import { GardenGroup, GardenGroups } from '.';

export interface Options<T> {
	groupDescriptionFunc?: (data: T, groupingKey: string) => string;
}

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

export interface CustomVirtualView<T> {
	customItemView?: MemoExoticComponent<(args: CustomItemView<T>) => JSX.Element>;
	customGroupView?: MemoExoticComponent<(args: CustomGroupView<T>) => JSX.Element>;
	customHeaderView?: MemoExoticComponent<(args: CustomHeaderView<T>) => JSX.Element>;
	customGroupByView?: React.FC;
}

export interface GardenOptions<T, D = T> {
	gardenKey: keyof T;
	itemKey: keyof T;
	objectIdentifier: keyof T;
	groupByKeys?: (keyof T)[];
	customGroupByKeys?: Record<string, unknown>;
	//Is this needed?
	sortData?: (data: T[], ...groupByKeys: (keyof T)[]) => T[];
}

export type PreGroupByFiltering<T = unknown> = (arr: T[], groupByKey: string) => T[];
export type PostGroupBySorting<T = unknown> = (data: GardenGroups<T>, keys: (keyof T)[]) => GardenGroups<T>;
