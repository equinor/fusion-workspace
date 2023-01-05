import { ComponentNode, Outlet, useInlet } from '@equinor/workspace-render-up';
import { ReactNode } from 'react';
import { componentStore, TabButton } from '../components';

/**
 * Function for altering or hiding workspace components
 * @param target - Name of target to alter/hide
 * @param getNode - Function that returns your altered component, return null to hide.
 * @param deps - Dependencies if you want it to rerender when props changes
 */
export const useWorkspaceComponents = (
	target: keyof typeof componentStore,
	getNode: () => ComponentNode,
	deps?: any[]
) => useInlet(target, () => getWrapper(target, getNode()), deps);

/**
 * Decorates components with wrappers
 * Returning null as ReactNode is indistinguishable from actual content.
 * Better to wrap it when it's registered than where it's used
 */
export const getWrapper = (target: keyof typeof componentStore, node: ReactNode) => {
	switch (target) {
		case 'create_button':
		case 'view_settings': {
			return <TabButton isActive={false}>{node}</TabButton>;
		}

		default: {
			return <>{node}</>;
		}
	}
};

/**
 * Renders a registered component in workspace
 * @param target - Name of component to render
 * @returns
 */
export const WorkspaceComponent = ({ target }: { target: keyof typeof componentStore }) => (
	<Outlet {...componentStore[target]} />
);
