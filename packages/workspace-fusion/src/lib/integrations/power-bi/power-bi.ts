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
  FusionPowerBiToken,
  FusionEmbedConfig,
  PowerBiConfig,
  FilterConfig,
  EmbedConfiguration,
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
  /**
   * To trigger getErrorMessage, throw error with response as cause in either getEmbed or getToken
   * @example
   * ```TS
   * const res = await getEmbed();
   * if(!res.ok){
   * throw new Error("anything", {cause: res})
   * }
   * ```
   */
  getErrorMessage: (reportUri: string, signal?: AbortSignal) => Promise<string>;
  filters?: FilterConfig;
  ReportMetaData?: (props: ReportMetaDataProps) => JSX.Element;
};

export type ReportMetaDataProps = {
  reportUri: string;
  anchor: HTMLElement;
  close: VoidFunction;
};
