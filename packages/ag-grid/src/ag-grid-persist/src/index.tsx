import { GridApi } from 'ag-grid-community';
import { useEffect, useMemo, useRef } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';
import { openDB, deleteDB, wrap, unwrap } from 'idb';

const usePersistor = (key: string, api: GridApi | null) => {
	const store = useMemo(() => getViewSettingStore(key), [key]);

	useEffect(() => {}, [api]);

	return useQuery([key], store.read);
};

const dbName = 'ag-grid-settings';
const storeName = 'ag-grid';

const dbPromise = openDB(dbName, 1, {
	upgrade(db) {
		db.createObjectStore(dbName);
	},
});

const getViewSettingStore = (key: string) => ({
	read: async (): Promise<any> => (await dbPromise).get(storeName, key),
	save: async (key: string, val: any) => (await dbPromise).put(storeName, val),
});
