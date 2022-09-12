import { IReportEmbedConfiguration } from 'powerbi-client';

export type GetPowerBiEmbedConfig = (reportUri: string) => Promise<IReportEmbedConfiguration>;
