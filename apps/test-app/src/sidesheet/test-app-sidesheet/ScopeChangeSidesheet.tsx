import { Button } from '@equinor/eds-core-react';
import { createWidget } from '@equinor/workspace-sidesheet';
import { sidesheets } from './sidesheets';

export type ScopeChangeProps = {
  id: string;
};

export const { Component: ScopeChangeSidesheet, render } = createWidget<ScopeChangeProps>(({ frame, props }) => {
  console.log('Scope change props', props);
  return (
    <div>
      scr-121212
      <Button onClick={() => frame.replace(sidesheets.handover({ id: '123' }))}>Replace me</Button>
    </div>
  );
});

export default render;
