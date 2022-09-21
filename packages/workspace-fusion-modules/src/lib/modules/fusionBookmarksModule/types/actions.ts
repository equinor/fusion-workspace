export interface ActionResponse<T> {
	status: 'Success' | 'Failed';
	action: T;
}

export type BookmarkActions = ApplyBookmark | SaveBookmark | Ping;

type ApplyBookmark = {
	type: 'apply';
	bookmarkId: string;
};

type SaveBookmark = {
	type: 'save';
	name: string;
};

type Ping = {
	type: 'ping';
};
