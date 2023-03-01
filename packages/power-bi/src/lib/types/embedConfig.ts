import { IReportEmbedConfiguration } from 'powerbi-client';

export type GetPowerBiEmbedConfig = (reportUri: string) => Promise<IReportEmbedConfiguration>;

export interface FusionEmbedConfig {
  embedUrl: string;
  reportId: string;
}
