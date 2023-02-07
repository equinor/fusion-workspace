import { Workspace } from './lib';
export * from './lib';
import { WorkspaceViewController } from '@equinor/workspace-react';
import type { BaseEvent } from '@equinor/workspace-core';
export type { BaseEvent };
import ReactDOM from 'react-dom';
export { WorkspaceViewController };

import { WorkspaceVitePlugin } from './plugin';
export { WorkspaceVitePlugin };

export { Workspace };
export default Workspace;

import { createRoot } from 'react-dom/client';

export { dynamic };

function dynamic(ref: HTMLElement, config: any, providers: []) {
	const teardown = createRoot(ref);
	const refresh = () => ReactDOM.render(<Workspace {...config} />, ref);

	refresh();

	return {
		refresh,
		teardown: () => teardown.unmount(),
	};
}
