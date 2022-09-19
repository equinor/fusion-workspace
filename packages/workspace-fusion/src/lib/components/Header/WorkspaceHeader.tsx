import { Filter } from '@equinor/filter';
import { ActionBar } from './ActionBar';

export function WorkspaceHeader() {
	return (
		<div>
			<ActionBar />
			<Filter />
		</div>
	);
}
