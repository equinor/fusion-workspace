import { Tab, useTabs } from '@equinor/workspace-react';
import { createContext, ReactNode, useContext, useRef, useState } from 'react';

type WorkspaceHeaderComponents = {
	analyticsTabs: Tab<string>[];
	viewTabs: Tab<string>[];
	icons: HeaderIcon[];
	setIcons: (icons: HeaderIcon[] | ((icons: HeaderIcon[]) => HeaderIcon[])) => void;
};

type HeaderIconProps = {
	anchor: HTMLElement;
};

export type HeaderIcon = {
	name: string;
	Icon: (props: HeaderIconProps) => JSX.Element;
	placement: 'left' | 'right';
};

const defaultState: WorkspaceHeaderComponents = {
	analyticsTabs: [],
	icons: [],
	viewTabs: [],
	setIcons: () => void 0,
};

export const WorkspaceHeaderComponents = createContext<WorkspaceHeaderComponents>(defaultState);

export const useWorkspaceHeaderComponents = () => useContext(WorkspaceHeaderComponents);

type RootProps = {
	children: ReactNode;
};

export const RootHeaderContext = ({ children }: RootProps) => {
	const [icons, setIcons] = useState<HeaderIcon[]>([]);
	const tabs = useTabs();

	const analyticsTabs = tabs.filter((s) => s.name === 'powerbi');

	const viewTabs = tabs.filter((s) => s.name !== 'powerbi');

	return (
		<WorkspaceHeaderComponents.Provider
			value={{
				...defaultState,
				analyticsTabs: analyticsTabs,
				viewTabs: viewTabs,
				setIcons,
				icons,
			}}
		>
			{children}
		</WorkspaceHeaderComponents.Provider>
	);
};
