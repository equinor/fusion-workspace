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
	viewController.addProvider({
		name,
		Component: ({ children }) => {
			effects();
			return <>{children}</>;
		},
	});
};
