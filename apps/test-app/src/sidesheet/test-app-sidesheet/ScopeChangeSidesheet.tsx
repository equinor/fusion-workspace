import { Button } from '@equinor/eds-core-react';
import { createWidget, useResizeContext } from '@equinor/workspace-sidesheet';

export const { Component: ScopeChangeSidesheet, render } = createWidget(({ replace, props }) => {
	console.log('Scope change props', props);
	return (
		<div>
			scr-121212
			<Button
				onClick={() =>
					replace(async (el, replace) => {
						const cleanup = (await import('./HandoverSidesheet')).render({
							el: el,
							replace,
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
