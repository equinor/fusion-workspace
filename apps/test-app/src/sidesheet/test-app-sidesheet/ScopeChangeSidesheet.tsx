import { Button } from '@equinor/eds-core-react';
import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';

export const { Component: ScopeChangeSidesheet, render } = createWidget(({ frame, props }) => {
	console.log('Scope change props', props);
	return (
		<div>
			scr-121212
			<Button
				onClick={() =>
					frame.replace(async (el, frame) => {
						const cleanup = (await import('./HandoverSidesheet')).render({
							el: el,
							frame,
							props: { id: '123' },
						});
						return cleanup;
					})
				}
			>
				Replace me
			</Button>
		</div>
	);
});

export default render;
