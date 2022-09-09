import { FusionBookmark } from '@equinor/workspace-fusion';
import { UserSettings } from '../types/payload';

export function sanitizePayload(state: FusionBookmark<any>) {
	/** Do not use spread operator, db will insert anything regardless of typescript */
	const sanitized: UserSettings<any> = {
		garden: { groupingKeys: state.garden?.groupingKeys },
		grid: { columnState: state.grid?.columnState },
	};

	return sanitized;
}
