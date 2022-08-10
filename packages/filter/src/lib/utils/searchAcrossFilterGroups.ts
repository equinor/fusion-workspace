import { ValueFormatterFilter } from '../types';

/**
 * Searchs for values matching atleast one of the filter groups values
 * @param valueFormatters
 * @param data
 * @param searchValue
 * @returns
 */
export function searchForStartsWith<T = unknown>(
    valueFormatters: ValueFormatterFilter<T>[],
    data: T[],
    searchValue: string
): T[] {
    return data.filter((value) =>
        valueFormatters.some(({ valueFormatter }) =>
            valueFormatter(value)?.toString().toLowerCase().startsWith(searchValue)
        )
    );
}

export function searchForIncludes<T = unknown>(
    valueFormatters: ValueFormatterFilter<T>[],
    data: T[],
    searchValue: string
): T[] {
    return data.filter((value) =>
        valueFormatters.some(({ valueFormatter }) =>
            valueFormatter(value)?.toString().toLowerCase().includes(searchValue)
        )
    );
}