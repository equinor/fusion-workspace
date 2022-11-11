import { Button } from '@equinor/eds-core-react';
import { createWidget } from './createSidesheet';
import { WorkOrderSidesheet } from './WorkorderSidesheet';

export const HandoverSidesheet = createWidget(({ replace, props }) => {
	console.log('Handover props', props);
	return (
		<div>
			<div>Am handover sidesheet</div>
			<Button onClick={() => replace((el, replace) => WorkOrderSidesheet({ el, replace, props: {} }))}>
				Replace with WO
			</Button>
		</div>
	);
});
