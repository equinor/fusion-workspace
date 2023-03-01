import { SlicerData } from '../types';
import { VisualDescriptor } from 'powerbi-client';

export const getSlicerDataAsync = async (slicer: VisualDescriptor): Promise<SlicerData> => {
  const { data } = await slicer.exportData();
  const filter = (await slicer.getFilters())[0];

  return { data, filter, slicer };
};
