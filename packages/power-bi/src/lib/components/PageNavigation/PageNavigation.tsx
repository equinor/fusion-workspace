import { Tabs } from '@equinor/eds-core-react';
import { Page, Report } from 'powerbi-client';
import { useState, useEffect } from 'react';
import { PowerBiController } from '../../classes';

interface PageNavigationProps {
	controller: PowerBiController;
}
export function PageNavigation({ controller }: PageNavigationProps) {
	const [pages, setPages] = useState<Page[]>([]);
	const [report, setReport] = useState<Report | null>(null);

	useEffect(() => {
		const unsub = controller.onReportReady((report) => {
			setReport(report);
			if (pages) {
				report.getPages().then((pages) => setPages(pages.filter((s) => s.visibility !== 1)));
			}
		});
		return unsub;
	}, []);

	return (
		<Tabs>
			{pages.map(({ name, displayName, setActive }) => (
				<Tabs.Tab
					key={name}
					onClick={() => {
						report?.setPage(name);
					}}
				>
					{displayName}
				</Tabs.Tab>
			))}
		</Tabs>
	);
}
