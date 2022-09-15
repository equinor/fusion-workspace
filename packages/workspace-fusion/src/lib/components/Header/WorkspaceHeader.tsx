import { useStatusBar } from '../../utils/statusBar/addStatusBar';
import { ActionBar } from './ActionBar';

export function WorkspaceHeader() {
	return (
		<div>
			<ActionBar />
			<div>Am a filter</div>
		</div>
	);
}
