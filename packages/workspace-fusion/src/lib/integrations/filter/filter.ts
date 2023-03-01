/**
 * Integrations folder for exporting types from the integration
 * namespace: @equinor/workspace-fusion/filter
 */

import {
  FilterConfiguration,
  FilterController,
  FilterGroup,
  FilterItemCount,
  FilterSearchActive,
  FilterValueType,
  ReactFilterController,
  SearchDataSet,
  SearchMode,
  SearchType,
  ValueFormatterFilter,
  ValueFormatterFunction,
} from '@equinor/workspace-filter';

/** Fusion workspace filter config */
type FilterConfig<T extends Record<PropertyKey, unknown>> = {
  filterGroups: FilterConfiguration<T>[];
};

export type {
  FilterConfiguration,
  FilterController,
  FilterGroup,
  FilterItemCount,
  FilterConfig,
  FilterSearchActive,
  FilterValueType,
  ReactFilterController,
  SearchDataSet,
  SearchMode,
  SearchType,
  ValueFormatterFilter,
  ValueFormatterFunction,
};
