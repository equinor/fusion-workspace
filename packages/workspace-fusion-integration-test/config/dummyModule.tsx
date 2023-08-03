import { FusionWorkspaceModule } from '@equinor/workspace-fusion/.';
import React, { Fragment } from 'react';

export function createDummyModule(moduleName: string, divId: string): FusionWorkspaceModule {
  return {
    name: moduleName,
    setup: () => {
      return {
        provider: { Component: ({ children }) => <Fragment>{children}</Fragment>, name: 'dummyProvider' },
        tab: { name: moduleName, Component: () => <div id={divId}></div>, TabIcon: () => <div>Dummy tab</div> },
      };
    },
  };
}
