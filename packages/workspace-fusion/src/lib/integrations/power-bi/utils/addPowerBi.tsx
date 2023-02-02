import { PowerBI, PowerBiController, IBasicFilter } from '@equinor/workspace-powerbi';
import { Tab } from '@equinor/workspace-react';
import { CircularProgress, Icon, Popover } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import { PowerBiHeader } from '../components/workspaceHeader/PowerBiHeader';
import { PowerBiIcon } from '../icons/PowerBiIcon';
import { FilterConfig, PowerBiConfig } from '../';
import { BaseEvent } from '@equinor/workspace-core';
import { HeaderIcon, useWorkspaceHeaderComponents } from '../../../context';
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import { tokens } from '@equinor/eds-tokens';
import { createPortal } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
	const [isOpen, setIsOpen] = useState(false);
	const pRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div ref={pRef}>
				<Icon
					color={tokens.colors.text.static_icons__tertiary.hex}
					onClick={() => setIsOpen((s) => !s)}
					name={info_circle.name}
				/>
			</div>
			{isOpen &&
				createPortal(
					<Popover placement="bottom" anchorEl={pRef.current} open={isOpen}>
						{/* TODO: Parse error */}
						<ErrorBoundary FallbackComponent={() => <div>Failed to load report info</div>}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
					</Popover>,
					document.getElementById('root')!
				)}
		</>
	);
};

const Loading = () => (
	<div style={{ height: '400px', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<CircularProgress />
	</div>
);
