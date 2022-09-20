export interface Tab<TabName extends string> {
	name: TabName;
	Component: () => JSX.Element;
	CustomHeader?: () => JSX.Element;
	TabIcon: () => JSX.Element;
}
