import { useFilterContext } from '../context/filterContext';
import { FilterGroup } from '../types';

export function useFilterGroup(group: FilterGroup) {
  const { setUncheckedValues, uncheckedValues } = useFilterContext();

  const setGroupsUnchecked = (value: string[]) => {
    const target = uncheckedValues.findIndex((s) => s.name === group.name);

    const newValue: FilterGroup = {
      isQuickFilter: false,
      name: group.name,
      values: value,
    };

    if (target !== -1) {
      setUncheckedValues((s) => [...s.slice(0, target), newValue, ...s.slice(target + 1)]);
    } else {
      setUncheckedValues((s) => [...s, newValue]);
    }
  };

  const toggleItem = (value: string) => {
    const isUnchecked = uncheckedValues.find((s) => s.name === group.name)?.values.includes(value);

    if (isUnchecked) {
      checkItem(value);
    } else {
      unCheckItem(value);
    }
  };

  const unCheckItem = (value: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === group.name);

    if (target !== -1) {
      setUncheckedValues((s) => [
        ...s.slice(0, target),
        { name: group.name, values: [...s[target].values, value], isQuickFilter: false },
        ...s.slice(target + 1),
      ]);
    } else {
      setUncheckedValues((s) => [...s, { name: group.name, values: [value], isQuickFilter: false }]);
    }
  };

  const checkItem = (value: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === group.name);
    if (target === -1) return;

    setUncheckedValues((s) => [
      ...s.slice(0, target),
      { name: group.name, values: [...s[target].values.filter((s) => s !== value)], isQuickFilter: false },
      ...s.slice(target + 1),
    ]);
  };

  const filterItemLabelClick = (value: string) => {
    const target = uncheckedValues.findIndex((s) => s.name === group.name);
    if (target === -1) return;
    setUncheckedValues((s) => [
      ...s.slice(0, target),
      { name: group.name, values: group.values.filter((val) => val !== value), isQuickFilter: false },
      ...s.slice(target + 1),
    ]);
  };

  /**
   * Check all in a group
   */
  const clearGroup = () => {
    const target = uncheckedValues.findIndex((s) => s.name === group.name);
    if (target === -1) return;
    setUncheckedValues((s) => [...s.slice(0, target), ...s.slice(target + 1)]);
  };

  return {
    clearGroup,
    filterItemLabelClick,
    toggleItem,
    setGroupsUnchecked,
    inactiveGroupValues: uncheckedValues.find((s) => s.name === group.name)?.values ?? [],
  };
}
