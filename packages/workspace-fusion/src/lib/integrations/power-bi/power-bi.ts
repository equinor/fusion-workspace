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
};

/**
 * Configuration for adding a fusion power bi client
 * Requires client configured for fusion reports api
 */
type FusionPowerBiConfig = {
	reportUri: string;
};
type PowerBiConfig = {
	reportUri: string;
	getEmbed: (reportUri: string, token: string, signal?: AbortSignal) => Promise<IReportEmbedConfiguration>;
	getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
};
