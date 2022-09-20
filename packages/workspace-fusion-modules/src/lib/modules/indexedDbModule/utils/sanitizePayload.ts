import { FusionBookmark } from '@equinor/workspace-fusion';
import { UserSettings } from '../types/payload';

export function sanitizePayload(state: FusionBookmark<any>) {
	/** Do not use spread operator, db will insert anything regardless of typescript */
	const sanitized: UserSettings<any> = {
		view: { activeTab: state?.view?.activeTab },
		garden: { groupingKeys: state.garden?.groupingKeys },
		grid: { columnState: state.grid?.columnState },
	};

	return sanitized;
}
