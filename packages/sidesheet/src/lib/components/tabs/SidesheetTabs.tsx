import { useObservable } from '../../hooks/useObservable';
import { useSidesheet } from '../provider/sidesheetControllerProvider';
import { Tabs } from '@equinor/eds-core-react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

export const SidesheetTabs = () => {
	const { tabs$, activeTab$, item$ } = useSidesheet();

	const item = useObservable(item$, item$.value);
	const activeTab = useObservable(activeTab$, activeTab$.value);
	const tabs = useObservable(tabs$, tabs$.value);

	if (!tabs || !item) return null;
	return (
		<Tabs
			activeTab={tabs.map((s) => s.name).indexOf(activeTab ?? '')}
			onChange={(index) => activeTab$.next(tabs.map((s) => s.name)[index])}
		>
			<SidesheetTabList>
				{tabs.map((s) => (
					<HeaderTab key={s.name}>{s.name}</HeaderTab>
				))}
			</SidesheetTabList>
			<TabList>
				{tabs.map((s) => (
					<Tab key={s.name}>
						<s.viewComponent item={item} />
					</Tab>
				))}
			</TabList>
		</Tabs>
	);
};
const HeaderTab = styled(Tabs.Tab)``;

export const SidesheetTabList = styled(Tabs.List)`
	background-color: ${tokens.colors.ui.background__light.hex};
`;

const TabList = styled(Tabs.Panels)`
	margin: 24px 32px;
`;

const Tab = styled(Tabs.Panel)`
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100%;
	padding-bottom: 50px;
`;
