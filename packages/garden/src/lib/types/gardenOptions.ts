import { MemoExoticComponent, MutableRefObject } from 'react';
import { GardenController } from '../classes';
import { GardenGroup, GardenGroups } from '.';

export interface CustomItemView<
	TData,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
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

export interface CustomGroupView<TData extends Record<PropertyKey, unknown>> {
	data: GardenGroup<TData>;
	onClick: () => void;
	onSelect?: (item: TData) => void;
	onGroupeSelect?: (item: any) => void;
	columnExpanded: boolean;
	groupByKeys: (keyof TData | string)[];
}

export interface CustomHeaderView<TData extends Record<PropertyKey, unknown>> {
	garden: GardenGroups<TData>;
	columnIndex: number;
	columnIsExpanded: boolean;
	groupByKey?: string;
}

export interface CustomVirtualViews<
	TData extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> {
	customItemView?: MemoExoticComponent<
		(args: CustomItemView<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>) => JSX.Element
	>;
	customGroupView?: MemoExoticComponent<(args: CustomGroupView<TData>) => JSX.Element>;
	customHeaderView?: MemoExoticComponent<(args: CustomHeaderView<TData>) => JSX.Element>;
	customGroupByView?: (
		props: CustomGroupViewProps<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>
	) => JSX.Element;
}

export type CustomGroupViewProps<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = string,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TCustomState, TContext>;
};

export type PreGroupByFiltering<TData extends Record<PropertyKey, unknown>> = (
	arr: TData[],
	groupByKey: string
) => TData[];
