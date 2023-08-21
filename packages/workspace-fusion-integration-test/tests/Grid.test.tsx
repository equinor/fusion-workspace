import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';
import { fakeTimeout } from '../utils/fakeTimeout';
import { getMockGridConfig } from '../config/mockGridConfig';
import gridModule from '@equinor/workspace-fusion/grid-module';

describe('Testing grid integration', () => {
  it('Should call grid api functions', async () => {
    const { fakeGetRows } = getMockGridConfig();

    act(() => {
      render(
        <Workspace
          workspaceOptions={workspaceOptions}
          modules={[gridModule]}
          gridOptions={{
            columnDefinitions: [],
            getRows: async (res) => {
              fakeGetRows();
              res.success({ rowData: [], rowCount: 0 });
            },
          }}
        />
      );
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    expect(fakeGetRows).toBeCalledTimes(1);
  });
});
