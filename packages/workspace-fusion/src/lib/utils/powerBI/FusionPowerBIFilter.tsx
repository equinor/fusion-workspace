import { PowerBiController, PowerBIFilter } from '@equinor/powerbi';
import { Report } from 'powerbi-client';
import { useState, useEffect } from 'react';

interface FusionPowerBiFilterProps {
	controller: PowerBiController;
}
export function FusionPowerBiFilter({ controller }: FusionPowerBiFilterProps) {
	const [report, setReport] = useState<Report | null>(null);

	useEffect(() => {
		const unsub = controller.onReportReady(setReport);
		return unsub;
	}, []);

	if (!report) {
		return null;
	}

	return <PowerBIFilter isLoaded={true} report={report} />;
}
