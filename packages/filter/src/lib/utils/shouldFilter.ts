import { FilterOptions } from '../types';

export const shouldFilter = <T>(options: FilterOptions<T>): boolean =>
    options.some(
        ({ defaultUncheckedValues }) => defaultUncheckedValues && defaultUncheckedValues.length > 0
    );
