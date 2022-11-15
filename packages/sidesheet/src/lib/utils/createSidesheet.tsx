import { ResizeWrapper } from '../components/ResizeWrapper';
import { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { mountSidesheetFrame, Cleanup, Frame } from '../components/SidesheetFrame';

export type SidesheetProps<TProps> = {
	replace?: Frame;
	el: HTMLDivElement;
	props: TProps;
};

type ComponentProps<TProps> = {
	replace: Frame;
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

	useEffect(() => {
		let teardown: undefined | (() => void);
		props.render({ el: ref.current as HTMLDivElement, props: props.props }).then((s) => {
			teardown = s;
		});
		return () => {
			if (teardown) {
				teardown();
			}
		};
	}, [props.props]);

	return <div style={{ height: '100%' }} id="Component" ref={ref} />;
}

async function render<TProps>(props: SidesheetProps<TProps>, Comp: (props: ComponentProps<TProps>) => JSX.Element) {
	let root: undefined | Root;
	const renderComp = (el: HTMLDivElement, replace: Frame) => {
		if (!root) {
			root = createRoot(el);
		}
		const rerender = () =>
			root!.render(
				<ResizeWrapper minWidth={20}>
					<Comp props={props.props} replace={replace} />
				</ResizeWrapper>
			);
		rerender();
		return () => root!.unmount();
	};

	if (props.replace?.replace) {
		return await props.replace.replace(renderComp);
	}
	return mountSidesheetFrame({
		el: props.el,
		component: renderComp,
	});
}
