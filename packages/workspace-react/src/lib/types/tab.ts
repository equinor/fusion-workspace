export interface Tab<TabName extends string> {
	name: TabName;
	Component: React.FC;
	HeaderComponent: () => JSX.Element;
}
