import { Grid, GridController } from '@workspace/grid';
import { useRef } from 'react';
import { useResizeObserver } from '../hooks';

interface FusionGridProps<T> {
	controller: GridController<T>;
}
export const FusionGrid = <T,>({ controller }: FusionGridProps<T>) => {
	const ref = useRef<HTMLDivElement>(null);
	const [, height] = useResizeObserver(ref);

	return (
		<div ref={ref} style={{ height: '100%', width: '100%' }}>
			<Grid controller={controller} height={height} />
		</div>
	);
};
