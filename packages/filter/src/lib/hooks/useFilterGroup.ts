import { useFilterContext } from '../context/filterContext';
import { FilterGroup, FilterStateGroup, FilterValueType } from '../types';

export function useFilterGroup(group: FilterGroup) {
  const { setUncheckedValues, uncheckedValues } = useFilterContext();

  const setGroupsUnchecked = (value: FilterValueType[]) => {
    const target = uncheckedValues.findIndex((uncheckedGroup) => uncheckedGroup.name === group.name);

    const newValue: FilterStateGroup = {
      name: group.name,
      values: value.map((s) => s.value),
    };

    if (target !== -1) {
      setUncheckedValues((filterGroup) => [
        ...filterGroup.slice(0, target),
        newValue,
        ...filterGroup.slice(target + 1),
      ]);
    } else {
      setUncheckedValues((filterGroup) => [...filterGroup, newValue]);
    }
  };

  const toggleItem = (filterItem: FilterValueType) => {
    const { value } = filterItem;
    const isUnchecked = uncheckedValues
      .find((uncheckedGroup) => uncheckedGroup.name === group.name)
      ?.values.includes(value);

    if (isUnchecked) {
      checkItem(value);
    } else {
      unCheckItem(value);
    }
  };

  const unCheckItem = (value: string) => {
    const target = uncheckedValues.findIndex((uncheckedGroup) => uncheckedGroup.name === group.name);

    if (target !== -1) {
      setUncheckedValues((filterGroup) => [
        ...filterGroup.slice(0, target),
        { name: group.name, values: [...filterGroup[target].values, value], isQuickFilter: false },
        ...filterGroup.slice(target + 1),
      ]);
    } else {
      setUncheckedValues((filterGroup) => [
        ...filterGroup,
        { name: group.name, values: [value], isQuickFilter: false },
      ]);
    }
  };

  const checkItem = (value: string) => {
    const target = uncheckedValues.findIndex((uncheckedGroup) => uncheckedGroup.name === group.name);
    if (target === -1) return;

    setUncheckedValues((filterGroup) => [
      ...filterGroup.slice(0, target),
      {
        name: group.name,
        values: [...filterGroup[target].values.filter((val) => val !== value)],
        isQuickFilter: false,
      },
      ...filterGroup.slice(target + 1),
    ]);
  };

  const filterItemLabelClick = (filterItem: FilterValueType) => {
    const target = uncheckedValues.findIndex((uncheckedGroup) => uncheckedGroup.name === group.name);
    if (target === -1) {
      setUncheckedValues((filtergroup) => [
        ...filtergroup,
        {
          name: group.name,
          values: group.filterItems.map((s) => s.value).filter((a) => a !== filterItem.value),
        },
      ]);
      return;
    }
    setUncheckedValues((filterGroup) => [
      ...filterGroup.slice(0, target),
      {
        name: group.name,
        values: group.filterItems.map((s) => s.value).filter((val) => val !== filterItem.value),
        isQuickFilter: false,
      },
      ...filterGroup.slice(target + 1),
    ]);
  };

  /**
   * Check all in a group
   */
  const clearGroup = () => {
    const target = uncheckedValues.findIndex((uncheckedGroup) => uncheckedGroup.name === group.name);
    if (target === -1) return;
    setUncheckedValues((filterGroup) => [...filterGroup.slice(0, target), ...filterGroup.slice(target + 1)]);
  };

  return {
    clearGroup,
    filterItemLabelClick,
    toggleItem,
    setGroupsUnchecked,
    inactiveGroupValues: uncheckedValues.find((uncheckedGroup) => uncheckedGroup.name === group.name)?.values ?? [],
  };
}
