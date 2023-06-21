import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { act, render } from '@testing-library/react';
import { vi } from 'vitest';
import { workspaceOptions } from '../config/workspaceOptions';
import { fakeTimeout } from '../utils/fakeTimeout';

describe('Testing garden integration', () => {
  it('Should call all garden api functions', async () => {
    const fakeGardenMeta = vi.fn();
    const fakeBlock = vi.fn();
    const fakeHeaders = vi.fn();
    act(() => {
      render(
        <Workspace
          workspaceOptions={workspaceOptions}
          modules={[gardenModule]}
          gardenOptions={{
            getSubgroupItems: () => {
              throw new Error();
            },
            getBlockAsync: async () => {
              fakeBlock();
              return [{ columnName: '123', items: [], subGroupCount: 0, subGroups: [], totalItemsCount: 0 }];
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
              return [{ count: 1, name: '123' }];
            },
            initialGrouping: ['finalizing'],
          }}
        />
      );
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    expect(fakeGardenMeta).toBeCalledTimes(1);
    expect(fakeHeaders).toBeCalledTimes(1);
  });
});
