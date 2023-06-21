import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';
import { fakeTimeout } from '../utils/fakeTimeout';
import { getMockGardenConfig } from '../config/mockGardenConfig';

describe('Testing garden integration', () => {
  it('Should call all garden api functions', async () => {
    const { gardenModule, fakeGardenMeta, fakeHeaders, gardenConfig } = getMockGardenConfig();

    act(() => {
      render(<Workspace workspaceOptions={workspaceOptions} modules={[gardenModule]} gardenOptions={gardenConfig} />);
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    expect(fakeGardenMeta).toBeCalledTimes(1);
    expect(fakeHeaders).toBeCalledTimes(1);
  });
});
