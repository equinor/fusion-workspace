import { createElement, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import { ComponentRenderArgs, makeComponent } from '@equinor/fusion-framework-react-app';

type WidgetProps = { id: string };

const App = (props: WidgetProps) => (
	<div style={{ height: '100vh', width: '500px', background: 'red' }}>hello {props.id}</div>
);

// /** create React render root component */
// const createApp = (args: ComponentRenderArgs, props: WidgetProps) =>
// 	makeComponent(createElement(App(props)), args, (s) => {});

/** Render function */
export const renderApp = (el: HTMLElement, args: ComponentRenderArgs, initialProps: WidgetProps) => {
	/** create render root from provided element */
	const root = createRoot(el);

	/** render Application */
	const rerender = (props: WidgetProps) => root.render(<App id={props.id} />);

	rerender(initialProps);

	/** Teardown */
	return {
		unmount: () => root.unmount(),
		rerender,
	};
};

export default renderApp;

export function SidesheetWrapper(props: WidgetProps) {
	const mRef = useRef<HTMLDivElement | null>(null);
	const controller = useRef<any | null>(null);

	useEffect(() => {
		if (controller.current || !mRef.current) return;
		const render = renderApp(mRef.current, { env: {}, fusion: [] as any }, props);
		controller.current = render;

		return () => {};
	}, [props]);

	useEffect(() => {
		if (controller.current) {
			controller.current.rerender(props);
		}
	}, [props]);

	return <div style={{ width: '500px', height: '1000px' }} id="sidesheet" ref={mRef} />;
}
