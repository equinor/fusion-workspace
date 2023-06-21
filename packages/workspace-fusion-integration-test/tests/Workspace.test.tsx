import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';

describe('Workspace', () => {
  it('Mounts correctly', () => {
    act(() => {
      render(<Workspace modules={[]} workspaceOptions={workspaceOptions} />);
    });
  });
});
