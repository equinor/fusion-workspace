import { WorkspaceOnClick } from '../../types';

export type SidesheetConfig<TData> = {
	Component: (props: WorkspaceOnClick<TData>) => JSX.Element;
};
