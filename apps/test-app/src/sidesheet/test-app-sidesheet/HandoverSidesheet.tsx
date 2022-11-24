import { Button } from '@equinor/eds-core-react';
import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';
import { sidesheets } from './sidesheets';

export type HandoverProps = {
	id: string;
	initial?: { id: string; description: string };
};

export const { Component: HandoverSidesheet, render } = createWidget<HandoverProps>(
	({ frame, props }) => {
		console.log('Handover props', props);

		const { isMinimized, setIsMinimized, setWidth, width } = useResizeContext();

		console.log(isMinimized, setIsMinimized, setWidth, width);

		return (
			<div>
				<div>Am handover sidesheet</div>
				<Button onClick={() => frame.replace(sidesheets.workorder({ woId: '122223' }))}>Replace with WO</Button>
			</div>
		);
	},
	{ defaultWidth: 200 }
);

export default render;
