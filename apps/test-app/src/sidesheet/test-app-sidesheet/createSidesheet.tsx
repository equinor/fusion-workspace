import { createRoot } from 'react-dom/client';
import { ReplaceFunction, mountSidesheetFrame } from '../SidesheetFrame';

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
export const createWidget =
	<TProps,>(Comp: (props: ComponentProps<TProps>) => JSX.Element) =>
	async (props: SidesheetProps<TProps>) => {
		const renderComp = (el: HTMLDivElement, replace: ReplaceFunction) => {
			const root = createRoot(el);
			root.render(<Comp props={props.props} replace={replace} />);
			return () => root.unmount();
		};

		if (props.replace) {
			return await props.replace(renderComp);
		}
		return mountSidesheetFrame({
			el: props.el,
			component: renderComp,
		});
	};
