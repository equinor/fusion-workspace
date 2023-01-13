export interface Tab<TabName extends string = string> {
	name: TabName;
	Component: () => JSX.Element;
	CustomHeader?: () => JSX.Element;
	TabIcon: () => JSX.Element;
	ignoreLoading?: boolean;
}
