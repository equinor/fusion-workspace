import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { FusionBookmark } from '../types';

const UserSettings = 'User-settings';

export class FusionUserSettings<TData> {
	save = async (state: FusionBookmark<TData>) => {
		const db = await this.openDb();
		await db.put(UserSettings, state, 'col');
		db.close();
	};

	private openDb = async () => {
		return await openDB('Workspace', 1, {
			upgrade(db) {
				db.createObjectStore(UserSettings);
			},
		});
	};

	read = async (): Promise<FusionBookmark<TData>> => {
		const userSettings: FusionBookmark<TData> = await (await this.openDb()).get(UserSettings, 'col');

		return userSettings;
	};
}
