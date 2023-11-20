import { useEffect, useState } from 'react';
import { ExpandedWithRange, Expanded } from '../components/VirtualGarden';
import { useGarden } from './useGarden';

export const useExpandedSubGroups = (columnCount: number) => {
  const {
    groupingService: { groupingKeys, dateVariant, timeInterval },
  } = useGarden();

  const [expanded, setExpanded] = useState<ExpandedWithRange[][]>(new Array(columnCount).fill(0).map(() => []));
  useEffect(() => {
    setExpanded(new Array(columnCount).fill(0).map(() => []));
  }, [groupingKeys.toString(), dateVariant, timeInterval, columnCount]);

  const expandColumn = (columnIndex: number, item: Expanded) => {
    const expandedIndexes = expanded[columnIndex];
    const after = expandedIndexes.filter((s) => s.index > item.index);
    const before = expandedIndexes.filter((s) => !after.includes(s));

    const changes = after.map((s) => ({
      ...s,
      index: s.index + item.count,
      range: new Array(s.count).fill(0).map((_, i) => i + s.index + item.count + 1),
    }));

    const res = [
      ...before,
      { ...item, range: new Array(item.count).fill(0).map((_, i) => i + item.index + 1) },
      ...changes,
    ];

    setExpanded((s) => [...s.slice(0, columnIndex), res, ...s.slice(columnIndex + 1)]);
  };

  const collapseColumn = (columnIndex: number, subgroupName: string) => {
    const expandedIndexes = expanded[columnIndex];
    const targetIndex = expandedIndexes.findIndex((s) => s.name === subgroupName);
    if (targetIndex === -1) {
      throw new Error('This should never happen');
    }
    const actualItem = expandedIndexes[targetIndex];
    const changess = expandedIndexes.slice(targetIndex + 1).map((s) => ({
      ...s,
      index: s.index - actualItem.count,
      range: new Array(s.count).fill(0).map((_, i) => i + s.index - actualItem.count + 1),
    }));
    const res = [...expandedIndexes.slice(0, targetIndex), ...changess];
    setExpanded((s) => [...s.slice(0, columnIndex), res, ...s.slice(columnIndex + 1)]);
  };

  return {
    expandColumn,
    collapseColumn,
    expanded,
  };
};
