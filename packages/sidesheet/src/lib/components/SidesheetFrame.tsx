import { Cleanup, Frame, ReplaceFunction } from '../types/types';
import { useCallback, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

type SidesheetFrameProps = {
	/**Loads parent frame */
	component: (el: HTMLDivElement, frame: Frame) => Promise<Cleanup> | Cleanup;
	el: HTMLDivElement;
};

export function mountSidesheetFrame({ el, component }: SidesheetFrameProps) {
	const root = createRoot(el);
	root.render(<SidesheetRoot initialComponent={component} />);
	return () => root.unmount();
}

type TeardownWrapper = {
	teardown: () => void;
};

type SidesheetRootProps = {
	initialComponent: (el: HTMLDivElement, frame: Frame) => Promise<Cleanup> | Cleanup;
};

function SidesheetRoot({ initialComponent }: SidesheetRootProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	const teardown = useRef<null | TeardownWrapper>(null);

	const unmount = () => {
		if (teardown.current) {
			teardown.current.teardown();
		}
	};

	const replace: ReplaceFunction = useCallback(async (newComp) => {
		/**Teardown old component if there is one */
		if (teardown.current) {
			teardown.current.teardown();
		}
		/** Mount new el */
		const cleanup = await newComp(ref.current as HTMLDivElement, { replace, unmount });
		/**Assing teardown func to be used when replace is called again */
		teardown.current = { teardown: cleanup };
		return cleanup;
	}, []);

	useEffect(() => {
		//bootstrap first component
		replace(initialComponent);
	}, []);

	return <div style={{ height: '100%' }} id="sidesheetroot" ref={ref}></div>;
}
