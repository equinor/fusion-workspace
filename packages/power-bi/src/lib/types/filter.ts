import { models, VisualDescriptor } from 'powerbi-client';

/** PowerBiFilter */
export interface Filter {
  values: string[];
  target: {
    table: string;
    column: string;
  };
  operator: BasicFilterOperators;
}
type BasicFilterOperators = 'In' | 'NotIn' | 'All';

export type ActiveFilter = string | number | boolean | null;
export interface BuiltPowerBiFilter {
  $schema: string;
  target: {
    table: string;
    column: string;
  };
  filterType: number;
  operator: BasicFilterOperators;
  values: string[];
}

export interface PowerBiFilterItem {
  type: string;
  value: string;
  slicerName: string;
  target: models.IFilterGeneralTarget | undefined;
}

export interface PowerBiFilter {
  type: string;
  slicer: VisualDescriptor;
  sortOrder: number;
  value: Record<string, PowerBiFilterItem>;
  filterVals: string[];
}
