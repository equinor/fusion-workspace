/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/power-bi
 */

import {
	ActiveFilter,
	BuiltPowerBiFilter,
	Callback,
	CompareFunc,
	ContextErrorType,
	Filter,
	FusionEmbedConfig,
	FusionPBIError,
	FusionPowerBiToken,
	GetPowerBiEmbedConfig,
	IBasicFilter,
	IReportEmbedConfiguration,
	OnchangeCallback,
	PowerBiController,
	PowerBiFilter,
	PowerBiFilterItem,
	SlicerData,
	SlicerFilter,
} from '@equinor/workspace-powerbi';

export type {
	ActiveFilter,
	BuiltPowerBiFilter,
	Callback,
	CompareFunc,
	ContextErrorType,
	Filter,
	FusionPBIError,
	GetPowerBiEmbedConfig,
	IReportEmbedConfiguration,
	OnchangeCallback,
	PowerBiController,
	PowerBiFilter,
	PowerBiFilterItem,
	SlicerData,
	SlicerFilter,
	FusionPowerBiConfig,
	FusionPowerBiToken,
	FusionEmbedConfig,
	PowerBiConfig,
	FilterConfig,
	EmbedConfiguration,
};

/**
 * Configuration for adding a fusion power bi client
 * Requires client configured for fusion reports api
 */
type FusionPowerBiConfig = {
	reportUri: string;
};

type FilterConfig = Pick<IBasicFilter, 'target' | 'values'>;

type EmbedConfiguration = {
	embedUrl: string;
	reportId: string;
};

type PowerBiConfig = {
	reportUri: string;
	getEmbed: (reportUri: string, token: string, signal?: AbortSignal) => Promise<EmbedConfiguration>;
	getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
	filters?: FilterConfig;
};
