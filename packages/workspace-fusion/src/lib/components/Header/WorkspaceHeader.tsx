import { Filter } from '@equinor/workspace-filter';
import { ActionBar } from './ActionBar';

export function WorkspaceHeader() {
	return (
		<div>
			<ActionBar />
			<Filter />
		</div>
	);
}
