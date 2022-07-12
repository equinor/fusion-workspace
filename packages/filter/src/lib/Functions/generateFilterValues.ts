import { FilterGroup, ValueFormatterFilter } from '../Hooks';
import { FilterOptions, FilterValueType } from '../Types';

export function generateFilterValues<T>(
    valueFormatters: ValueFormatterFilter<T>[],
    data: T[]
): FilterGroup[] {
    if (!data || data.length == 0) return [];
    // Initialize all filter groups
    const filterGroups: FilterGroup[] = valueFormatters.map(
        ({ name }): FilterGroup => ({ name: name, values: [] })
    );

    /** Iterate all values */
    data.forEach((item) =>
        valueFormatters.forEach(({ name, valueFormatter }) => {
            const filterGroup = filterGroups.find(
                ({ name: filterGroupName }) => name === filterGroupName
            );
            /** Cant happen but ts */
            if (!filterGroup) return;
            const value = valueFormatter(item);

            if (Array.isArray(value)) {
                filterGroup.values = [
                    ...filterGroup.values.filter((oldValue) => !value.includes(oldValue)),
                    ...value,
                ];
            } else {
                filterGroup.values = [
                    ...filterGroup.values.filter((oldValue) => oldValue !== value),
                    value,
                ];
            }
        })
    );

    return sortFilterGroups(filterGroups, valueFormatters);
}

/**
 * Sorts the filter items alphanumeric.
 * PITFALL: Case sensitive sorting
 * A > T > a
 * @param groups
 * @returns
 */
function sortFilterGroups<T = unknown>(
    groups: FilterGroup[],
    filterConfig: FilterOptions<T>
): FilterGroup[] {
    groups.forEach(({ values, name }) => {
        const customSort = filterConfig.find(({ name: configName }) => name === configName)?.sort;

        if (customSort) {
            customSort(values);
        } else {
            values.sort(defaultSortFunction);
        }
    });
    return groups;
}

function defaultSortFunction(a: FilterValueType, b: FilterValueType): number {
    /** Place null values on top */
    if (a === null) return -1;
    if (b === null) return 1;

    /** Ignore if a and b is not same type */
    if (typeof b !== typeof a) return 0;

    switch (typeof a) {
        case 'number': {
            //B has to be a number
            return a - (b as number);
        }

        case 'string': {
            return a.toLowerCase().localeCompare((b as string).toLowerCase());
        }
    }
}
