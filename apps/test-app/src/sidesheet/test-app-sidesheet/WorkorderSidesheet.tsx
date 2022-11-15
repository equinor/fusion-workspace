import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';
import { Button } from '@equinor/eds-core-react';
import { render as ScopeChangeRender } from './ScopeChangeSidesheet';

type WorkOrderProps = {
	woId: string;
};

export const { Component: WorkOrderSidesheet, render } = createWidget<WorkOrderProps>(({ frame, props }) => {
	console.log('wo props', props);

	return (
		<div>
			<button onClick={() => frame.unmount()}>unmount</button>
			<div>Am Workorder sidesheet</div>
			<div>My props are {JSON.stringify(props)}</div>
			<Button onClick={() => frame.replace((el, frame) => ScopeChangeRender({ el: el, props: {}, frame }))}>
				Replace with Scope change
			</Button>
		</div>
	);
});

export default render;
