import { ValueFormatterFilter } from './filter';

/**
 * Defines which data to search in
 */
export type SearchDataSet = 'Data' | 'FilteredData';

/**
 * Different types for searching
 */
export type SearchType = 'startsWith' | 'includes';

/**
 * Defines which valueformatters to use for searching
 */
export type SearchMode = 'id/desc' | 'all';

/**
 * Object to store for an active search, allows for searching after filtering has been done.
 */
export interface FilterSearchActive<T> {
	searchValue: string;
	valueFormatters: ValueFormatterFilter<T>[];
	searchIn: SearchDataSet;
	type: SearchType;
}
