import { FusionWorkspaceModule } from '@equinor/workspace-fusion/.';
import React from 'react';
import { Fragment } from 'react';

export const dummyModule: FusionWorkspaceModule = {
  name: 'dummy',
  setup: (props) => {
    return {
      provider: { Component: ({ children }) => <Fragment>{children}</Fragment>, name: 'dummyProvider' },
      tab: { name: 'dummy', Component: () => <div></div>, TabIcon: () => <div>Dummy tab</div> },
    };
  },
};
