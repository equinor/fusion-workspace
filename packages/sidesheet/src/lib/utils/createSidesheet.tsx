import { ResizeWrapper } from '../components/ResizeWrapper';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ReplaceFunction, mountSidesheetFrame, Cleanup } from '../components/SidesheetFrame';
import { useEffectOnce } from '../hooks/useEffectOnce';

export type SidesheetProps<TProps> = {
	replace?: ReplaceFunction;
	el: HTMLDivElement;
	props: TProps;
};

type ComponentProps<TProps> = {
	replace: ReplaceFunction;
	props: TProps;
};

/**
 * Function for generating a widget sidesheet
 * @param Comp - Component you want to render
 * @returns teardown function
 */
export const createWidget = <TProps,>(Comp: (props: ComponentProps<TProps>) => JSX.Element) => ({
	render: (props: SidesheetProps<TProps>) => render(props, Comp),
	Component: (props: TProps) => (
		<ComponentLoader render={(props: SidesheetProps<TProps>) => render(props, Comp)} props={props} />
	),
});

type ComponentLoaderProps<TProps> = {
	props: TProps;
	render: (props: SidesheetProps<TProps>) => Promise<Cleanup>;
};

function ComponentLoader<TProps>(props: ComponentLoaderProps<TProps>) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffectOnce(() => {
		let teardown: () => void | undefined;
		props.render({ el: ref.current as HTMLDivElement, props: props.props }).then((s) => {
			teardown = s;
		});
		return () => {
			if (teardown) {
				teardown();
			}
		};
	});

	return <div id="Component" ref={ref} />;
}

async function render<TProps>(props: SidesheetProps<TProps>, Comp: (props: ComponentProps<TProps>) => JSX.Element) {
	const renderComp = (el: HTMLDivElement, replace: ReplaceFunction) => {
		const root = createRoot(el);
		root.render(
			<ResizeWrapper minWidth={20}>
				<Comp props={props.props} replace={replace} />
			</ResizeWrapper>
		);
		return () => root.unmount();
	};

	if (props.replace) {
		return await props.replace(renderComp);
	}
	return mountSidesheetFrame({
		el: props.el,
		component: renderComp,
	});
}
