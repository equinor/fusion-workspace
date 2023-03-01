import { createWidget } from '@equinor/workspace-sidesheet';
import { Button } from '@equinor/eds-core-react';
import { sidesheets } from './sidesheets';

export type WorkOrderProps = {
  woId: string;
};

export const { Component: WorkOrderSidesheet, render } = createWidget<WorkOrderProps>(
  ({ frame, props }) => {
    console.log('wo props', props);

    return (
      <div>
        <button onClick={() => frame.unmount()}>unmount</button>
        <div>Am Workorder sidesheet</div>
        <div>My props are {JSON.stringify(props)}</div>
        <Button onClick={() => frame.replace(sidesheets.scopechange({ id: 'some guid' }))}>
          Replace with Scope change
        </Button>
      </div>
    );
  },
  { defaultWidth: 1200 }
);

export default render;
