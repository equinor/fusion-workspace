// Design question, is this even necessary. The function recieving the bookmark should maybe be responsible for validating its content.
export function validateBookmark(bookmark: any) {
	if (!bookmark) {
		throw new Error('Invalid bookmark, failed to apply');
	}
}
