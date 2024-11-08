import { Report } from 'powerbi-client';
import { PowerBiFilter } from '../types';
import { HIDDEN_FILTER_PREFIX } from './constants';
import { createPowerBiFilter } from './createPowerBiFilter';
import { getSlicerDataAsync } from './getSlicerDataAsync';
/**
 * Get all slicer filters on mount and after a slicer filter is set.
 * Some filters may be removed after a slicer filter is set.
 */
export async function getFiltersAsync(reportInstance: Report): Promise<PowerBiFilter[]> {
  const page = await reportInstance.getActivePage();
  const visuals = await page.getVisuals();
  const slicers = visuals.filter((visual) => visual.type == 'slicer');
  const filters = await Promise.all(
    slicers.map(async (slicer) => {
      const slicerData = await getSlicerDataAsync(slicer);

      return createPowerBiFilter(slicerData);
    })
  );

  return filters.filter((f) => !f.type.startsWith(HIDDEN_FILTER_PREFIX));
}
