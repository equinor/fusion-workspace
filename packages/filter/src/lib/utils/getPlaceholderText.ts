import { SearchMode } from '../types';

export const getPlaceholderText = (searchMode: SearchMode): string => {
	if (searchMode === 'all') {
		return 'Free text search';
	} else {
		return 'Search for id or title';
	}
};
