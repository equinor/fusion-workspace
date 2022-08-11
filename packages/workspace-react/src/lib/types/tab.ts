export interface Tab<TabName extends string> {
	name: TabName;
	Component: React.FC;
}
