import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';
import { Button } from '@equinor/eds-core-react';
import { render as ScopeChangeRender } from './ScopeChangeSidesheet';

type WorkOrderProps = {
	woId: string;
};

export const { Component: WorkOrderSidesheet, render } = createWidget<WorkOrderProps>(({ replace, props }) => {
	console.log('wo props', props);
	return (
		<div>
			<div>Am Workorder sidesheet</div>
			<div>My props are {JSON.stringify(props)}</div>
			<Button onClick={() => replace((el, replace) => ScopeChangeRender({ el: el, props: {}, replace }))}>
				Replace with Scope change
			</Button>
		</div>
	);
});

export default render;
