export interface ActionResponse {
	status: 'Success' | 'Failed';
}

export type BookmarkActions = ApplyBookmark | SaveBookmark;

type ApplyBookmark = {
	type: 'apply';
	bookmarkId: string;
};

type SaveBookmark = {
	type: 'save';
	name: string;
};
