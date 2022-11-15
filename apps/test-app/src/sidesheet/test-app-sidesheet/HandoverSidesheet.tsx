import { Button } from '@equinor/eds-core-react';
import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';
import { render as WorkOrderRender } from './WorkorderSidesheet';

type HandoverProps = {
	id: string;
	initial?: { id: string; description: string };
};

export const { Component: HandoverSidesheet, render } = createWidget<HandoverProps>(({ frame, props }) => {
	console.log('Handover props', props);

	const { isMinimized, setIsMinimized, setWidth, width } = useResizeContext();

	console.log(isMinimized, setIsMinimized, setWidth, width);

	return (
		<div>
			<div>Am handover sidesheet</div>
			<Button
				onClick={() =>
					frame.replace((el, frame) => WorkOrderRender({ el, frame, props: { woId: 'Some new id' } }))
				}
			>
				Replace with WO
			</Button>
		</div>
	);
});

export default render;
