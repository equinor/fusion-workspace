import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';
import { createDummyModule } from '../config/dummyModule';

describe('Workspace', () => {
  it('Mounts correctly', () => {
    act(() => {
      render(<Workspace modules={[createDummyModule('a', 'a')]} workspaceOptions={workspaceOptions} />);
    });
  });

  it('Should load tab from query param correctly', () => {
    const module1 = createDummyModule('a', 'a');
    const module2 = createDummyModule('b', 'b');
    const module3 = createDummyModule('c', 'c');

    const url = new URL(window.location.toString());
    url.searchParams.set('tab', module2.name);

    history.replaceState(null, '', url);

    act(() => {
      render(<Workspace workspaceOptions={workspaceOptions} modules={[module1, module2, module3]} />);
    });

    const el = document.getElementById(module2.name);
    expect(el).toBeTruthy();
  });
  it('Should load grid default tab correctly', () => {});
});
