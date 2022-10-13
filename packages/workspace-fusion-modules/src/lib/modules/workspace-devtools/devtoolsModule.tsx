import { FusionMediator, FusionWorkspaceModule } from '@equinor/workspace-fusion';
import * as ReactDOM from 'react-dom/client';
import { AuditTrail } from './components/AuditTrail';

const CONTAINER_NAME = 'workspace-devtools';

/**
 * Persists view state in index db, applies by default on page load
 * Will not load if bookmark is in the url
 */
export const DevtoolsModule: FusionWorkspaceModule<any> = {
	name: 'Devtools',
	setup,
};

async function setup(mediator: FusionMediator<any>) {
	if (!document.getElementById(CONTAINER_NAME)) {
		const node = document.createElement('div');
		node.id = CONTAINER_NAME;
		const el = window.document.body.appendChild(node);
		const root = ReactDOM.createRoot(el);
		root.render(<AuditTrail />);
	}
}
