import { FusionBookmark } from '@equinor/workspace-fusion';
import { openDB } from 'idb';
import { UserSettings } from '../types/payload';
import { sanitizePayload } from '../utils/sanitizePayload';

const TABLE_NAME = 'User-settings';
const DB_NAME = 'Workspace';

export class FusionUserSettings<TData> {
	save = async (state: FusionBookmark<TData>, key: string) => {
		const payload = sanitizePayload(state);
		await this.patchUserSettings(payload, key);
	};

	private patchUserSettings = async (payload: UserSettings<any>, key: string) => {
		const db = await this.openDb();
		await db.put(TABLE_NAME, payload, key);
		db.close();
	};

	private openDb = async () => {
		return await openDB(DB_NAME, 1, {
			upgrade(db) {
				db.createObjectStore(TABLE_NAME);
			},
		});
	};

	read = async (key: string): Promise<FusionBookmark<TData>> => {
		const userSettings: FusionBookmark<TData> = await (await this.openDb()).get(TABLE_NAME, key);

		return userSettings;
	};
}
