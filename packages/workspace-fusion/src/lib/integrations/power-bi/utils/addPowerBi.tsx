import { PowerBI, PowerBiController, IBasicFilter } from '@equinor/workspace-powerbi';
import { Tab } from '@equinor/workspace-react';
import { Icon, Popover } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import { PowerBiHeader } from '../components/workspaceHeader/PowerBiHeader';
import { PowerBiIcon } from '../icons/PowerBiIcon';
import { FilterConfig, PowerBiConfig } from '../';
import { BaseEvent } from '@equinor/workspace-core';
import { HeaderIcon, useWorkspaceHeaderComponents } from '../../../context';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { tokens } from '@equinor/eds-tokens';
import { createPortal } from 'react-dom';
Icon.add({ info_circle });

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
	const { icons, setIcons } = useWorkspaceHeaderComponents();

	useEffect(() => {
		if (powerBiConfig.ReportMetaData) {
			const { ReportMetaData } = powerBiConfig;

			const icon: HeaderIcon = {
				Icon: () => (
					<MetaPopup>
						<ReportMetaData reportUri={powerBiConfig.reportUri} />
					</MetaPopup>
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

type MetaPopupProps = {
	children: ReactNode;
};
const MetaPopup = ({ children }: MetaPopupProps) => {
	const [open, setOpen] = useState(false);
	const pRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div ref={pRef}>
				<Icon
					color={tokens.colors.text.static_icons__tertiary.hex}
					onClick={() => setOpen((s) => !s)}
					name={info_circle.name}
				/>
			</div>
			{open &&
				createPortal(
					<Popover placement="bottom" anchorEl={pRef.current} open={open}>
						{children}
					</Popover>,
					document.getElementById('root')!
				)}
		</>
	);
};
