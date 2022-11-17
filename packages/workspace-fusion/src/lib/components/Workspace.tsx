import { useRef } from 'react';
import { useEffectOnce, Workspace as WorkspaceView } from '@equinor/workspace-react';
import { CustomTab, FusionMediator, WorkspaceConfig, WorkspaceConfiguration } from '../types';
import { DataSourceConfig } from '../integrations/data-source';
import { FilterConfig } from '../integrations/filter';
import { GardenConfig } from '../integrations/garden';
import { GridConfig } from '../integrations/grid';
import { StatusBarConfig } from '../integrations/status-bar';
import { SidesheetConfig } from '../integrations/sidesheet';
import { FusionPowerBiConfig, PowerBiConfig } from '../integrations/power-bi';
import { didOptionsChange } from '../utils/optionsChanged/didOptionsChange';
import { createConfigurationObject } from '../utils/createWorkspaceConfig';

type OnWorkspaceReadyEvent<TData extends Record<PropertyKey, unknown>> = {
	api: FusionMediator<TData>;
};

export type WorkspaceProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> = {
	gardenOptions?: GardenConfig<TData, TExtendedFields, TCustomGroupByKeys, TContext, TContext>;
	gridOptions?: GridConfig<TData>;
	filterOptions?: FilterConfig<TData>;
	dataOptions?: DataSourceConfig<TData>;
	statusBarOptions?: StatusBarConfig<TData>;
	sidesheetOptions?: SidesheetConfig<TData>;
	workspaceOptions: WorkspaceConfig<TData>;
	customTabs?: CustomTab[];
	onWorkspaceReady?: (ev: OnWorkspaceReadyEvent<TData>) => void;
	fusionPowerBiOptions?: FusionPowerBiConfig;
	powerBiOptions?: PowerBiConfig;
	contextOptions?: (filteredData: TData[]) => TContext;
	//TODO: Modules?
};

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceProps<TData, TContext, TExtendedFields, TCustomGroupByKeys>) {
	const configuration = useRef<WorkspaceConfiguration<TData, TContext, TExtendedFields, TCustomGroupByKeys>>(
		createConfigurationObject(props)
	);

	/**
	 * Triggers on every parent render and updates configuration accordingly
	 * Careful with doing complex operations in here
	 */
	didOptionsChange(createConfigurationObject(props), configuration.current);

	/**
	 * Calls user's callback to pass the api
	 * TODO: Proxy wrapped DTO!
	 */
	useEffectOnce(() => {
		if (props.onWorkspaceReady) {
			props.onWorkspaceReady({ api: configuration.current.mediator });
		}
	});

	return <WorkspaceView controller={configuration.current.viewController} />;
}
