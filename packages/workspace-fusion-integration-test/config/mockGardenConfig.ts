import { vi } from 'vitest';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';

export const getMockGardenConfig = () => {
  const fakeGardenMeta = vi.fn();
  const fakeBlock = vi.fn();
  const fakeHeaders = vi.fn();

  const gardenConfig = {
    getSubgroupItems: () => {
      throw new Error();
    },
    getBlockAsync: async () => {
      fakeBlock();
      return [
        { columnName: '123', items: [{ id: '123' }], subGroupCount: 0, subGroups: [], totalItemsCount: 1 },
        { columnName: '124', items: [], subGroupCount: 0, subGroups: [], totalItemsCount: 0 },
      ];
    },
    getDisplayName: () => '',
    getGardenMeta: async () => {
      fakeGardenMeta();
      return {
        allGroupingOptions: [],
        columnCount: 2,
        columnStart: 0,
        rowCount: 1,
        validGroupingOptions: [],
      };
    },
    getHeader: async () => {
      fakeHeaders();
      return [
        { count: 1, name: '123' },
        { count: 2, name: '124' },
      ];
    },
    initialGrouping: ['finalizing'],
  };

  return {
    gardenConfig,
    fakeBlock,
    fakeGardenMeta,
    fakeHeaders,
    gardenModule,
  };
};
