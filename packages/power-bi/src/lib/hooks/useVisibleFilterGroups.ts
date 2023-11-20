import { useState } from 'react';
import { PowerBIFilterOptions } from '../components/Filter/Filter';
import { Report } from 'powerbi-client';

export const getVisibleFiltersFromLocalStorage = (reportId: string) => {
  const value = localStorage.getItem(`${reportId}-filters`);
  if (!value) return null;
  try {
    const parsedValue = JSON.parse(value);
    if (Array.isArray(parsedValue) && parsedValue.every((s) => typeof s === 'string')) {
      return parsedValue as string[];
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const useVisibleFilters = (report: Report, options?: PowerBIFilterOptions) => {
  const [filterGroupVisible, setFilterGroupVisible] = useState<string[]>(
    getVisibleFiltersFromLocalStorage(report.getId()) ?? options?.defaultFilterGroupVisible ?? []
  );

  return [
    filterGroupVisible,
    (e: Parameters<typeof setFilterGroupVisible>[0]) => {
      const reportId = report.getId();
      if (reportId) {
        localStorage.setItem(`${reportId}-filters`, JSON.stringify(e));
      }
      setFilterGroupVisible(e);
    },
  ] as const;
};
