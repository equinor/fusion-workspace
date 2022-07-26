import { FilterGroup } from '../Hooks';

export const filterGroupExists = (groupName: string, filterState: FilterGroup[]): boolean =>
    filterState.findIndex(({ name }) => name === groupName) !== -1;
