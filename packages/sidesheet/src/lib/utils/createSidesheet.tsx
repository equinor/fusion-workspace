import { ResizeWrapper } from '../components/ResizeWrapper';
import { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { mountSidesheetFrame } from '../components/SidesheetFrame';
import { Frame } from '../types';

export type SidesheetProps<TProps> = {
	frame?: Frame;
	el: HTMLDivElement;
	props: TProps;
};

type ComponentProps<TProps> = {
	frame: Frame;
	props: TProps;
};

/**
 * Function for generating a widget sidesheet
 * @param Comp - Component you want to render
 * @returns teardown function
 */
export const createWidget = <TProps,>(
	Comp: (props: ComponentProps<TProps>) => JSX.Element,
	resizeOptions?: { defaultWidth?: number }
) => ({
	render: (props: SidesheetProps<TProps>) => render(props, Comp, resizeOptions?.defaultWidth),
	Component: (props: TProps) => (
		<ComponentLoader Comp={Comp} props={props} defaultWidth={resizeOptions?.defaultWidth} />
	),
});

type ComponentLoaderProps<TProps> = {
	props: TProps;
	Comp: (props: ComponentProps<TProps>) => JSX.Element;
	defaultWidth?: number;
};

function ComponentLoader<TProps>(props: ComponentLoaderProps<TProps>) {
	return (
		<ResizeWrapper minWidth={20} defaultWidth={props.defaultWidth}>
			<props.Comp props={props.props} frame={{} as any} />
		</ResizeWrapper>
	);
}

async function render<TProps>(
	props: SidesheetProps<TProps>,
	Comp: (props: ComponentProps<TProps>) => JSX.Element,
	defaultWidth?: number
) {
	let root: undefined | Root;
	const renderComp = (el: HTMLDivElement, frame: Frame) => {
		if (!root) {
			root = createRoot(el);
		}

		root.render(
			<ResizeWrapper minWidth={20} defaultWidth={defaultWidth}>
				<Comp props={props.props} frame={frame} />
			</ResizeWrapper>
		);

		return () => root!.unmount();
	};

	if (props.frame?.replace) {
		return await props.frame.replace(renderComp);
	}
	return mountSidesheetFrame({
		el: props.el,
		component: renderComp,
	});
}
