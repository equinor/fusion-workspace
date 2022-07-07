import { FilterGroup, ValueFormatterFilter } from '../Hooks/useFilterController';
import { FilterValueType } from '../Types';
import { findValueFormatter } from '../Utils/findValueFormatter';

export function doesItemPassFilter<T>(
    item: T,
    state: FilterGroup[],
    valueFormatters: ValueFormatterFilter<T>[]
): boolean {
    /** Item must pass all the filters */
    return state.every(({ name, values: uncheckedValues }) => {
        const valueFormatterFunction = findValueFormatter(name, valueFormatters);
        if (!valueFormatterFunction) return;

        const itemValue = valueFormatterFunction(item);
        return doesItemPassCriteria(uncheckedValues, itemValue);
    });
}

export function doesItemPassCriteria(
    uncheckedValues: FilterValueType[],
    value: FilterValueType | FilterValueType[]
): boolean {
    /**
     * Item value is array
     */
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return !uncheckedValues.includes(null);
        }

        /** All values in the array must be unchecked for filter to remove the item */
        return !value.every((value) => uncheckedValues.includes(value));
    } else {
        /** Returns false if it finds the value */
        /** Passes if the value is null */
        return !uncheckedValues.includes(value);
    }
}
