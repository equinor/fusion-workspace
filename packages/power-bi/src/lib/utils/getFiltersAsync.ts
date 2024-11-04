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
  try {
    const page = await reportInstance.getActivePage();
    const visuals = await page.getVisuals();
    const slicers = visuals.filter((visual) => visual.type == 'slicer');
    const concurrencyLimit = 3;
    const slicerQueue = [...slicers];
    const activePromises = [];
    const filters: PowerBiFilter[] = [];

    const processSlicer = async () => {
      while (slicerQueue.length > 0) {
        const slicer = slicerQueue.shift();
        if (!slicer) {
          break;
        }
        const slicerData = await getSlicerDataAsync(slicer);
        const filter = createPowerBiFilter(slicerData);
        if (!filter.type.startsWith(HIDDEN_FILTER_PREFIX)) {
          filters.push(filter);
        }
      }
    };
    for (let i = 0; i < concurrencyLimit; i++) {
      if (slicerQueue.length > 0) {
        activePromises.push(processSlicer());
      }
    }
    await Promise.all(activePromises);
    return filters;
  } catch (error) {
    console.error('Error fetching slicer filters:', error);
    throw error;
  }
}
