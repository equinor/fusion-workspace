import { ActionResponse, BookmarkActions } from '../types/actions';

export const isStatus = <T>(obj: unknown): obj is ActionResponse<T> => {
	return (obj as ActionResponse<T>)?.status !== undefined;
};

export const isBookmarkAction = (obj: unknown): obj is BookmarkActions => {
	return (obj as BookmarkActions)?.type !== undefined;
};
