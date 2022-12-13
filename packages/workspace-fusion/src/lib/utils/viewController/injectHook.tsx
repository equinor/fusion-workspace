import { WorkspaceViewController } from '@equinor/workspace-react';

type InjectHookArgs = {
	viewController: WorkspaceViewController<any, any>;
	name: string;
	effects: () => void;
};
/**
 * Injects a hook into workspace
 */
export const injectHook = ({ effects, name, viewController }: InjectHookArgs) => {
	/** Prevent remounting of hooks/providers */
	if (!!viewController.providers.find((s) => s.name === name)) return;
	viewController.addProvider({
		name,
		Component: ({ children }) => {
			effects();
			return <>{children}</>;
		},
	});
};
