import { Icon } from '@equinor/eds-core-react';
import { Report } from 'powerbi-client';
import { useCallback, useEffect, useState } from 'react';
import { ActiveFilter, PowerBiFilter, PowerBiFilterItem } from '../../types';
import { createAdvancedPbiFilter } from '../../utils/createAdvancedPbiFilter';
import { getActiveFilterGroupArray } from '../../utils/getActiveFilterGroupArray';
import { getActiveFilterValues } from '../../utils/getActiveFilterValues';
import { getFiltersAsync } from '../../utils/getFiltersAsync';
import { PowerBIQuickFilter } from '../QuickFilter/QuickFilter';
import { search, playlist_add, drag_handle } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { Skeleton } from '../skeleton/Skeleton';
import { getVisibleFiltersFromLocalStorage, useVisibleFilters } from '../../hooks/useVisibleFilterGroups';
import styled from 'styled-components';

Icon.add({ search, playlist_add, drag_handle });

export interface FilterController {
  deselectAllValues: (group: PowerBiFilter, filter: PowerBiFilterItem) => Promise<void>;
  handleChangeGroup: (filter: PowerBiFilter) => Promise<void>;
  handleOnSelectAll: (
    group: PowerBiFilter,
    filter: PowerBiFilterItem,
    allVisibleFilterValues: string[]
  ) => Promise<void>;
  handleOnChange: (group: PowerBiFilter, filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
  resetFilter: () => Promise<void>;
  isAnyFiltersActive: () => boolean;
  slicerFilters: PowerBiFilter[];
  activeFilters: Record<string, ActiveFilter[]>;
  setIsFilterExpanded: (isExpanded: boolean) => void;
  isFilterExpanded: boolean;
  visibleFilters: string[];
  setVisibleFilters: (visibleGroups: string[]) => void;
}

export interface PowerBIFilterOptions {
  defaultFilterGroupVisible?: string[];
}

type PowerBIFilterProps = {
  report: Report;
  options?: PowerBIFilterOptions;
};

export const PowerBIFilter = ({ report, options }: PowerBIFilterProps): JSX.Element | null => {
  const [activeFilters, setActiveFilters] = useState<Record<string, ActiveFilter[]>>({});
  const [slicerFilters, setSlicerFilters] = useState<PowerBiFilter[] | null>(null);
  const [filterGroupVisible, setFilterGroupVisible] = useVisibleFilters(report, options);

  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const handleChangeGroup = async (filter: PowerBiFilter) => {
    if (filterGroupVisible?.find((a) => a === filter.type) !== undefined) {
      setFilterGroupVisible(filterGroupVisible.filter((a) => a !== filter.type));
      setActiveFilters((prev) => ({ ...prev, [filter.type]: [] }));
      await filter.slicer?.setSlicerState({ filters: [] });
    } else {
      setFilterGroupVisible((prev) => [...(prev ? prev : []), filter.type]);
    }
  };

  /**
   * Function to handle "Select All" checkbox.
   * Will either add all visible filter values to current target, or remove all depending
   * on if checkbox is ticked or not.
   */
  const handleOnSelectAll = async (
    group: PowerBiFilter,
    filter: PowerBiFilterItem,
    allVisibleFilterValues: string[]
  ) => {
    try {
      const slicerFilter = createAdvancedPbiFilter(filter, allVisibleFilterValues);
      setActiveFilters((prev) => ({
        ...prev,
        [filter.type]: allVisibleFilterValues,
      }));
      await group.slicer?.setSlicerState({ filters: slicerFilter });
    } catch (errors) {
      console.error("Couldn't select all filters", errors);
    }
  };

  /** Main function for handling user events on checkboxes for filters.
   * Will set new filters on slicer, or remove depending on if it already exists or not.
   */
  const handleOnChange = async (group: PowerBiFilter, filter: PowerBiFilterItem, singleClick = false) => {
    try {
      const change = filter.value;

      let newConditions: ActiveFilter[] = [];

      if (activeFilters) {
        /** Either clicking on a label, only selecting this single one, deselect all others if any,
         *  or clicking on a checkbox, selecting multiple ones, or deselecting.
         */
        if (singleClick) {
          if (activeFilters[filter.type]?.includes(change ?? '(Blank)')) {
            newConditions = activeFilters[filter.type].filter((a) => a === change);
          } else {
            newConditions = [change ?? '(Blank)'];
          }
          setActiveFilters((prev) => ({ ...prev, [filter.type]: newConditions }));
        } else {
          if (activeFilters[filter.type]?.includes(change ?? '(Blank)')) {
            newConditions = activeFilters[filter.type].filter((a) => a !== change);
          } else {
            newConditions = [...activeFilters[filter.type], change ?? '(Blank)'];
          }
          setActiveFilters((prev) => ({ ...prev, [filter.type]: newConditions }));
        }
      }
      const filters = newConditions.length === 0 ? [] : createAdvancedPbiFilter(filter, newConditions);

      await group.slicer?.setSlicerState({
        filters,
      });
    } catch (errors) {
      console.error(errors);
    }
  };

  /**
   * Function for resetting all active filters.
   * Need to go through every slicer and set its filter state to empty.
   * Could not remove all filters on e.g. active page, so will need to loop through here.
   */
  const resetFilter = async () => {
    try {
      if (activeFilters && slicerFilters) {
        for (const filter of slicerFilters) {
          await filter.slicer.setSlicerState({ filters: [] });
        }

        const emptyActiveFilters: Record<string, ActiveFilter[]> = {};
        for (const key in activeFilters) {
          emptyActiveFilters[key] = [];
        }

        setActiveFilters(emptyActiveFilters);
      }
    } catch (errors) {
      console.error('Couldnt remove filters', errors);
    }
  };

  const deselectAllValues = useCallback(async (group: PowerBiFilter, filter: PowerBiFilterItem) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filter.type]: [],
    }));
    await group.slicer.setSlicerState({ filters: [] });
  }, []);

  /**
   * Effect should be triggered when report has first loaded,
   * initializing all possible filters and also checking for default active filters.
   * Also need to handle when user changes page, so this effect has to also be triggered when
   * page is changed.
   */
  useEffect(() => {
    if (report) {
      const initFilters = async () => {
        const filters = await getFiltersAsync(report);
        const defaultActiveFilters = await getActiveFilterValues(filters);
        setSlicerFilters(filters.sort((a, b) => a.type.localeCompare(b.type)));
        setActiveFilters(defaultActiveFilters);
        const state = getVisibleFiltersFromLocalStorage(report.getId());
        if (state) {
          setFilterGroupVisible(state);
        } else {
          setFilterGroupVisible(filters.map((s) => s.type));
        }
      };

      initFilters();
    }
  }, [report]);

  /**
   * Effect should be triggered when activeFilters has changed.
   * Some filters may not longer be applicable, therefore the need to get filters again.
   * Dependency array needs to check for length because checking only object will not fire the effect.
   */
  useEffect(() => {
    if (report) {
      const reCreateFilters = async () => {
        const filters = await getFiltersAsync(report);

        setSlicerFilters(filters.sort((a, b) => a.type.localeCompare(b.type)));

        const filterGroupNames = getActiveFilterGroupArray(activeFilters);

        const reportId = report.getId();

        const state = getVisibleFiltersFromLocalStorage(reportId);
        if (state) {
          setFilterGroupVisible(state);
        } else {
          setFilterGroupVisible((s) => [...s, ...filterGroupNames].filter((v, i, a) => a.indexOf(v) === i));
        }
      };
      reCreateFilters();
    }
  }, [activeFilters, Object.keys(activeFilters).length]);

  if (!slicerFilters || Object.keys(activeFilters).length === 0) return <QuickFilterLoading />;

  const controller: FilterController = {
    handleChangeGroup,
    handleOnChange,
    handleOnSelectAll,
    deselectAllValues,
    setIsFilterExpanded,
    isFilterExpanded,
    resetFilter,
    isAnyFiltersActive: () => Object.values(activeFilters).some((group) => group.length > 0),
    slicerFilters,
    activeFilters,
    visibleFilters: filterGroupVisible,
    setVisibleFilters: (e) => {
      const reportId = report.getId();
      if (reportId) {
        localStorage.setItem(`${reportId}-filters`, JSON.stringify(e));
      }
      setFilterGroupVisible(e);
    },
  };

  return <PowerBIQuickFilter controller={controller} />;
};

function QuickFilterLoading() {
  return (
    <StyledQuickFilterLoading>
      {new Array(20).fill(null).map(() => (
        <Skeleton style={{ gridRow: 1 }} height={24} width={160} />
      ))}
    </StyledQuickFilterLoading>
  );
}

const StyledQuickFilterLoading = styled.div`
  height: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, min-content));
  grid-template-rows: 1fr;
  background-color: ${tokens.colors.ui.background__light.hex};
  align-items: center;
  gap: 1em;
  padding-left: 1em;
`;
