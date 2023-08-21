import Workspace from '@equinor/workspace-fusion';

import { act, render } from '@testing-library/react';
import React from 'react';
import { dummyModule } from '../utils/dummyModule';
import { DetailsSidesheetProps } from '@equinor/workspace-fusion/sidesheet';

describe('Testing sidesheet integration', () => {
  it('Should load sidesheet if item present in url', () => {
    const fakesidesheetId = 'fakesideheetId';
    const FakeSidesheet = (props: DetailsSidesheetProps<unknown>) => <div id={fakesidesheetId}>{props.id}</div>;
    const fakeItemId = '123';

    const url = new URL(window.location.toString());
    url.searchParams.set('item', fakeItemId);

    history.replaceState(null, '', url);

    act(() => {
      render(
        <Workspace
          modules={[dummyModule]}
          workspaceOptions={{ getIdentifier: () => '' }}
          sidesheetOptions={{ type: 'default', DetailsSidesheet: FakeSidesheet }}
        />
      );
    });

    const sidesheetEl = document.getElementById(fakesidesheetId);
    expect(sidesheetEl?.innerHTML).toStrictEqual(fakeItemId);
  });
});
