import React, { memo } from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render, getByText } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';
import { fakeTimeout } from '../utils/fakeTimeout';
import { getMockGardenConfig } from '../config/mockGardenConfig';
import { expect } from 'vitest';

describe('Testing garden integration', () => {
  it('Should call all garden api functions', async () => {
    const { gardenModule, fakeGardenMeta, fakeHeaders, gardenConfig } = getMockGardenConfig();

    act(() => {
      render(<Workspace workspaceOptions={workspaceOptions} modules={[gardenModule]} gardenOptions={gardenConfig} />);
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    expect(fakeGardenMeta).toHaveBeenCalled();
    expect(fakeHeaders).toHaveBeenCalled();
  });

  it('Should render a custom garden item', async () => {
    const { gardenModule, gardenConfig } = getMockGardenConfig();

    const uniqueGardenItemId = 'uid-garden-item';

    act(() => {
      render(
        <Workspace
          workspaceOptions={workspaceOptions}
          modules={[gardenModule]}
          gardenOptions={{
            ...gardenConfig,
            customViews: {
              customItemView: memo(() => <div id={uniqueGardenItemId}></div>),
            },
          }}
        />
      );
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    const el = document.getElementById(uniqueGardenItemId);
    if (!el) {
      throw new Error('Failed to render unique garden item');
    }

    expect(el).toBeTruthy();
  });
  it('Should render a custom garden group', async () => {
    const { gardenModule, gardenConfig } = getMockGardenConfig();

    const uniqueGardenHeaderId = 'uid-garden-group';

    act(() => {
      render(
        <Workspace
          workspaceOptions={workspaceOptions}
          modules={[gardenModule]}
          gardenOptions={{
            ...gardenConfig,

            customViews: {
              customHeaderView: memo(() => <div id={uniqueGardenHeaderId}></div>),
            },
          }}
        />
      );
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    const el = document.getElementById(uniqueGardenHeaderId);
    if (!el) {
      throw new Error('Failed to render unique garden group');
    }

    expect(el).toBeTruthy();
  });
  it('Should render the correct display name', async () => {
    const { gardenModule, gardenConfig } = getMockGardenConfig();

    const uniqueDisplayName = 'uid-display-name';

    act(() => {
      render(
        <Workspace
          workspaceOptions={workspaceOptions}
          modules={[gardenModule]}
          gardenOptions={{
            ...gardenConfig,
            getDisplayName: () => uniqueDisplayName,
          }}
        />
      );
    });

    //Have to make an artificial timeout to ensure all functions are called.
    await fakeTimeout();

    const assertion = getByText(document.body, uniqueDisplayName);
    expect(assertion).toBeTruthy();
  });
});
