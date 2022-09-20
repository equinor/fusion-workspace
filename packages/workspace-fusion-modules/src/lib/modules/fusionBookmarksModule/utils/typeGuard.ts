import { ActionResponse, BookmarkActions } from '../types/actions';

export const isStatus = (obj: unknown): obj is ActionResponse => {
	return (obj as ActionResponse)?.status !== undefined;
};

export const isBookmarkAction = (obj: unknown): obj is BookmarkActions => {
	return (obj as BookmarkActions)?.type !== undefined;
};
