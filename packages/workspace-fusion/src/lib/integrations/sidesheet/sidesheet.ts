import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../types';

export type Controller = {
	close: VoidFunction;
	invalidate?: VoidFunction;
};

export type SidesheetConfig<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = SidesheetAdvanced<TData, TContext, TCustomSidesheetEvents> | SidesheetSimple<TData>;

export const DetailsSidesheetConfigKey: keyof SidesheetSimple<any> = 'DetailsSidesheet';
export const SidesheetConfigKey: keyof SidesheetAdvanced<any, any, any> = 'Sidesheet';
export const CreateSidesheetConfigKey: keyof SidesheetSimple<any> = 'CreateSidesheet';

export type SimpleProps<T extends Record<PropertyKey, unknown> = {}> = T & { controller: Controller };

export type SidesheetSimple<TData extends Record<PropertyKey, unknown>> = {
	type: 'simple';
	DetailsSidesheet?: (props: SimpleProps<DetailsSidesheetProps<TData>>) => JSX.Element;
	CreateSidesheet?: (props: SimpleProps) => JSX.Element;
};

export type SidesheetAdvanced<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent
> = {
	type: 'advanced';
	Sidesheet?: (props: SidesheetProps<TData, TContext, TCustomSidesheetEvents>) => JSX.Element;
};

export type SidesheetProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends BaseEvent
> = {
	ev: Parameters<FusionMediator<TData, TContext, TCustomSidesheetEvents>['sidesheetService']['sendEvent']>[0];
	controller: Controller;
};

export type DetailSidesheetEvent<TData extends Record<PropertyKey, unknown>> = {
	type: 'details_sidesheet';
	props: DetailsSidesheetProps<TData>;
};

export type CreateSidesheetEvent = {
	type: 'create_sidesheet';
};

export const detailSidesheetEventKey: DetailSidesheetEvent<any>['type'] = 'details_sidesheet';
export const createSidesheetEventKey: CreateSidesheetEvent['type'] = 'create_sidesheet';

type DetailsSidesheetProps<TData extends Record<PropertyKey, unknown>> = {
	id: string;
	item?: TData;
};
