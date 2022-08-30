import { createContext, ReactNode, useContext, useRef } from 'react';
import { useResizeObserver } from '../hooks';

interface TabWrapperProps {
	children: ReactNode;
}

export function TabWrapper({ children }: TabWrapperProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [width, height] = useResizeObserver(ref);

	return (
		<div style={{ height: '1000px' }} ref={ref}>
			<SizeProvider value={{ height, width }}>{children}</SizeProvider>
		</div>
	);
}

interface ContainerSize {
	height: number;
	width: number;
}

const SizeContext = createContext<ContainerSize>({ height: 1000, width: 1000 });

interface SizeProviderProps {
	children: ReactNode;
	value: ContainerSize;
}
const SizeProvider = ({ children, value }: SizeProviderProps) => (
	<SizeContext.Provider value={value}>{children}</SizeContext.Provider>
);

export const useSizeContext = () => useContext(SizeContext);
