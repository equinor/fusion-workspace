import { IReportEmbedConfiguration } from 'powerbi-client';

export type GetPowerBiEmbedConfig = (reportUri: string) => Promise<IReportEmbedConfiguration>;

export interface AdGroupMapping {
	groupId: string;
	groupName: string;
	identityName: string;
}

export interface Identity {
	mappingType: string;
	notFoundMode: string;
	delimiter: string;
	nameSelector?: any;
	adGroupMapping: AdGroupMapping[];
}

export interface AdGroup {
	id: string;
	name: string;
}

export interface Membership {
	type: string;
	identifiers?: any;
	userTypes: string[];
	allowExternals: boolean;
	adGroups: AdGroup[];
}

export interface Role {
	name: string;
	pbiName: string;
	description: string;
	isAdminRole: boolean;
	membership: Membership[];
}

export interface RlsConfiguration {
	version: number;
	typeName: string;
	globalAccessRequirement?: any;
	identity: Identity;
	roles: Role[];
}

export interface FusionEmbedConfig {
	name?: any;
	embedType: string;
	embedUrl: string;
	tokenType: string;
	datasetId: string;
	dashboardId?: any;
	groupId: string;
	reportId: string;
	tileId?: any;
	rlsConfiguration: RlsConfiguration;
}
