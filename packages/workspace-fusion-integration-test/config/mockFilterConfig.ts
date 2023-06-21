import { FilterConfig } from '@equinor/workspace-fusion/filter';
import { fireEvent } from '@testing-library/react';
import { Mock, vi } from 'vitest';

type MockFilterConfig = {
  config: FilterConfig;
  mockFilterMeta: Mock<any, any>;
  getSearchInputEl: () => HTMLElement;
  triggerSearchInput: (val: string) => void;
};

export const getMockFilterConfig = (): MockFilterConfig => {
  const mockFilterMeta = vi.fn();

  const getSearchInputEl = () => {
    return document.getElementById('quick-filter-search') as HTMLElement;
  };

  return {
    getSearchInputEl: getSearchInputEl,
    triggerSearchInput: () => {
      const el = getSearchInputEl();

      /** I cant explain this but both lines are necessary */
      (el as any).value = '123';
      fireEvent.input(el, 'avc');

      fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 });
    },
    mockFilterMeta,
    config: {
      defaultUncheckedValues: [],
      dataSource: {
        getFilterMeta: async (state, signal) => {
          mockFilterMeta();
          return [{ name: 'abc', isQuickFilter: true, filterItems: [{ count: 10, value: 'OS' }] }];
        },
      },
    },
  };
};
