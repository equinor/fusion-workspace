import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { FusionBookmark } from '../types';

const UserSettings = 'User-settings';
const DBName = 'Workspace';

export class FusionUserSettings<TData> {
	save = async (state: FusionBookmark<TData>, key: string) => {
		const db = await this.openDb();
		await db.put(UserSettings, state, key);
		db.close();
	};

	private openDb = async () => {
		return await openDB(DBName, 1, {
			upgrade(db) {
				db.createObjectStore(UserSettings);
			},
		});
	};

	read = async (key: string): Promise<FusionBookmark<TData>> => {
		const userSettings: FusionBookmark<TData> = await (await this.openDb()).get(UserSettings, key);

		return userSettings;
	};
}
