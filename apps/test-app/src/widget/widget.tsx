import { createElement, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ComponentRenderArgs, makeComponent } from '@equinor/fusion-framework-react-app';

type WidgetArgs = { id: string };

const App = (props: WidgetArgs) => () => <div>Test {props.id}</div>;

/** create React render root component */
const createApp = (args: ComponentRenderArgs, props: WidgetArgs) =>
	makeComponent(createElement(App(props)), args, (s) => {});

/** Render function */
export const renderApp = (el: HTMLElement, args: ComponentRenderArgs, props: WidgetArgs) => {
	/** make render element */

	/** create render root from provided element */
	const root = createRoot(el);

	/** render Application */
	const rerender = (renderProps: WidgetArgs) => root.render(createElement(createApp(args, renderProps)));

	rerender(props);

	/** Teardown */
	return {
		teardown: () => root.unmount(),
		rerender,
	};
};

export default renderApp;

type LifeCycle = {
	teardown: () => void;
	rerender: (renderProps: WidgetArgs) => void;
};

export const Component = (args: WidgetArgs) => {
	const renderRef = useRef<null | HTMLDivElement>(null);
	const initialHasMounted = useRef<LifeCycle | null>(null);

	useEffect(() => {
		if (!renderRef.current) return;
		const contr = renderApp(renderRef.current, { env: {}, fusion: { modules: [] as any } }, args);
		initialHasMounted.current = contr;

		return () => {
			contr.teardown();
		};
	}, []);

	if (initialHasMounted.current) {
		initialHasMounted.current.rerender(args);
	}

	return <div ref={renderRef}></div>;
};
