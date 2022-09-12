import { PowerBIEmbed } from 'powerbi-client-react';
import { PowerBiController } from '../classes';
import { useState } from 'react';
import { Report } from 'powerbi-client';
import { Loading } from './loading';
import { useIsReady } from '../hooks';

interface PowerBiProps {
	controller: PowerBiController;
}
export function PowerBI({ controller }: PowerBiProps) {
	const isReady = useIsReady(controller);
	const [report, setReport] = useState<Report>();

	if (!isReady) return <Loading />;

	if (!controller.config) throw new Error('IsReady is true but embed config is undefined');

	/**
	 * TODO: Hooks for applying state while mounted
	 */

	return (
		<div style={{ height: '1200px', width: '700px' }}>
			<PowerBIEmbed
				embedConfig={controller.config}
				cssClassName="pbiEmbed"
				getEmbeddedComponent={(embed) => {
					if (!report) {
						setReport(embed as Report);
						/** Apply states */
					}
				}}
			/>
		</div>
	);
}
