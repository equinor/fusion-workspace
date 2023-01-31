import { PowerBI, PowerBiController, IBasicFilter } from '@equinor/workspace-powerbi';
import { Tab } from '@equinor/workspace-react';
import { PowerBiHeader } from '../components/workspaceHeader/PowerBiHeader';
import { PowerBiIcon } from '../icons/PowerBiIcon';
import { FilterConfig, PowerBiConfig } from '../';
import { BaseEvent } from '@equinor/workspace-core';

export function addPowerBi<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(powerBiConfig: PowerBiConfig | undefined): undefined | Tab {
	if (!powerBiConfig) return;

	const controller = new PowerBiController();

	return {
		Component: () => (
			<PowerBI
				getErrorMessage={powerBiConfig.getErrorMessage}
				controller={controller}
				getToken={powerBiConfig.getToken}
				getEmbedInfo={powerBiConfig.getEmbed}
				reportUri={powerBiConfig.reportUri}
				filters={createBasicFilter(powerBiConfig.filters)}
			/>
		),
		CustomHeader: () => <PowerBiHeader controller={controller} />,
		name: 'powerbi',
		TabIcon: () => <PowerBiIcon />,
	};
}

function createBasicFilter(filters: FilterConfig | undefined): undefined | IBasicFilter {
	if (!filters) return undefined;
	return {
		$schema: 'http://powerbi.com/product/schema#basic',
		target: filters.target,
		filterType: 1,
		operator: 'In',
		values: filters.values,
	};
}
