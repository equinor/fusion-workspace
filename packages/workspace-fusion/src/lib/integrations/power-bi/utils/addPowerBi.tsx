import { PowerBI, PowerBiController, IBasicFilter } from '@equinor/workspace-powerbi';
import { Tab } from '@equinor/workspace-react';
import { PowerBiHeader } from '../components/workspaceHeader/PowerBiHeader';
import { PowerBiIcon } from '../icons/PowerBiIcon';
import { FilterConfig, PowerBiConfig } from '../';
import { HeaderIcon, useWorkspaceHeaderComponents } from '../../../context';
import { useEffect } from 'react';
import { PowerBiPopover } from '../components/PowerBiPopover';

export function addPowerBi(powerBiConfig: PowerBiConfig | undefined): undefined | Tab {
	if (!powerBiConfig) return;

	const controller = new PowerBiController();

	return {
		Component: () => <PowerBiWrapper {...powerBiConfig} controller={controller} />,
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

const PowerBiWrapper = (powerBiConfig: PowerBiConfig & { controller: PowerBiController }) => {
	const { setIcons } = useWorkspaceHeaderComponents();

	useEffect(() => {
		if (powerBiConfig.ReportMetaData) {
			const { ReportMetaData } = powerBiConfig;

			const icon: HeaderIcon = {
				Icon: ({ anchor }) => (
					<PowerBiPopover
						reportUri={powerBiConfig.reportUri}
						anchor={anchor}
						ReportMetaData={ReportMetaData}
					/>
				),
				name: 'report_metadata',
				placement: 'left',
			};

			setIcons((icons) => [...icons, icon]);
			return () => {
				setIcons((i) => i.filter((s) => s.name !== 'report_metadata'));
			};
		}
		return;
	}, [powerBiConfig.ReportMetaData]);

	return (
		<PowerBI
			getErrorMessage={powerBiConfig.getErrorMessage}
			controller={powerBiConfig.controller}
			getToken={powerBiConfig.getToken}
			getEmbedInfo={powerBiConfig.getEmbed}
			reportUri={powerBiConfig.reportUri}
			filters={createBasicFilter(powerBiConfig.filters)}
		/>
	);
};
