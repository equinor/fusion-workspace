import { createWidget } from './createSidesheet';
import { Button } from '@equinor/eds-core-react';
import { ScopeChangeSidesheet } from './ScopeChangeSidesheet';

export const WorkOrderSidesheet = createWidget(({ replace, props }) => {
	console.log('wo props', props);
	return (
		<div>
			<div>Am Workorder sidesheet</div>
			<Button onClick={() => replace((el, replace) => ScopeChangeSidesheet({ el, replace, props: {} }))}>
				Replace with Scope change
			</Button>
		</div>
	);
});
