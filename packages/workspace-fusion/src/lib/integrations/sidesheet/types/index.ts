export * from './workspaceProps';

export type DetailSidesheetEvent<TData> = {
	type: 'details_sidesheet';
	props: { id: string; item?: TData };
};
