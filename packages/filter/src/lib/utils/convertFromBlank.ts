import { FilterValueType } from '../types';

export const DEFAULT_NULL_VALUE = '(Blank)';
export function convertFromBlank(name: FilterValueType) {
    return name === DEFAULT_NULL_VALUE ? null : name;
}
