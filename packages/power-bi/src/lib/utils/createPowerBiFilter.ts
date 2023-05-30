import { PowerBiFilter } from '../types';
import { SlicerData } from '../types/slicer';
import { transformData } from './transformData';

export function createPowerBiFilter({ data, filter: sliceFilter, slicer }: SlicerData): PowerBiFilter {
  // SortOrder
  const x = slicer.layout.x || 0;
  const y = slicer.layout.y || 0;
  const sortOrder = x + y;

  // FilterCleanup
  const { values, type } = transformData(data);

  // Initial filter Object
  const filter = { type, slicer, sortOrder, value: {}, filterVals: values };

  // Adding filter values
  values.forEach((item) => {
    filter.value[item] = {
      type: filter.type,
      value: item,
      slicerName: slicer.name,
      target: sliceFilter?.target,
    };
  });

  return filter;
}
