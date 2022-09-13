import { PowerBIEmbed } from 'powerbi-client-react';
import { PowerBiController } from '../classes';
import { useEffect, useRef, useState } from 'react';
import { Page, Report } from 'powerbi-client';
import { Loading } from './loading';
import { useIsReady } from '../hooks';
import { useResizeObserver } from '../hooks/useResizeObserver';
import './style.css';
import { Button } from '@equinor/eds-core-react';

interface PowerBiProps {
	controller: PowerBiController;
}
export function PowerBI({ controller }: PowerBiProps) {
	const isReady = useIsReady(controller);

	const ref = useRef<HTMLDivElement | null>(null);

	if (!isReady) return <Loading />;

	if (!controller.config) throw new Error('IsReady is true but embed config is undefined');

	/**
	 * TODO: Hooks for applying state while mounted
	 */

	return (
		<div ref={ref} style={{ position: 'relative', height: '100%', width: '100%' }}>
			<PageNavigation controller={controller} />
			<LoadedReport controller={controller} parentRef={ref}></LoadedReport>
		</div>
	);
}

interface LoadedReportProps {
	parentRef: React.MutableRefObject<HTMLDivElement | null>;
	controller: PowerBiController;
}
export function LoadedReport({ parentRef, controller }: LoadedReportProps) {
	const [width, height] = useResizeObserver(parentRef);

	if (!controller.config) throw new Error('Already checked');

	return (
		<div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
			<div style={{ height: `${0.41 * width}px` }}>
				<PowerBIEmbed
					embedConfig={controller.config}
					cssClassName="pbiEmbed"
					getEmbeddedComponent={(embed) => {
						embed.on('rendered', () => {
							controller.reportReady(embed as Report);
						});
					}}
				/>
			</div>
		</div>
	);
}

interface PageNavigationProps {
	controller: PowerBiController;
}
export function PageNavigation({ controller }: PageNavigationProps) {
	const [pages, setPages] = useState<Page[]>([]);

	useEffect(() => {
		controller.onReportReady((report) => {
			report.getPages().then((pages) => setPages(pages.filter((s) => s.visibility !== 1)));
		});
	}, []);

	return (
		<div>
			{pages.map((s) => (
				<div key={s.name}>{s.displayName}</div>
			))}
		</div>
	);
}
