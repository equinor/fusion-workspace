import { Tabs } from '@equinor/eds-core-react';
import { useWorkspace } from '@equinor/workspace-fusion';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Handover } from '../types';
import { DetailsTab } from './DetailsTab';

export function HandoverSidesheet() {
	const [activeTab, setActiveTab] = useState(0);
	const ref = useRef<HTMLDivElement | null>(null);

	const {
		clickService: { lastClick },
	} = useWorkspace();
	if (!lastClick) return <></>;
	const { item } = lastClick;

	const handleChange = (index: number) => {
		setActiveTab(index);
		ref && ref.current && ref.current.scrollTo({ left: index ** index });
	};
	return (
		<Tabs activeTab={activeTab} onChange={handleChange}>
			<TabListWrapper ref={ref}>
				<Tabs.List>
					<Tabs.Tab>Details </Tabs.Tab>
				</Tabs.List>
			</TabListWrapper>
			<Tabs.Panels>
				<DetailsTab commpkg={item as Handover} />
			</Tabs.Panels>
		</Tabs>
	);
}

export const TabListWrapper = styled.div`
	overflow: auto;
	width: 100%;
	::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	scroll-behavior: smooth;
`;
