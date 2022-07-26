import { ValueFormatterFilter, ValueFormatterFunction } from '../Hooks/useFilterController';

/**
 * Finds valueformatter for a given group
 * Should never return undefined
 * @param name
 * @param valueFormatters
 * @returns
 */
export function findValueFormatter<T>(
    name: string,
    valueFormatters: ValueFormatterFilter<T>[]
): ValueFormatterFunction<T> | undefined {
    return valueFormatters.find((formatter) => formatter.name === name)?.valueFormatter;
}
