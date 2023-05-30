import { PowerBiController, PowerBIFilter } from '@equinor/workspace-powerbi';
import { Report } from 'powerbi-client';
import { useState, useEffect } from 'react';

type FusionPowerBiFilterProps = {
  controller: PowerBiController;
};
export function FusionPowerBiFilter({ controller }: FusionPowerBiFilterProps) {
  const [report, setReport] = useState<Report | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const unsub = controller.onReportReady((embed) => {
      setReport(embed);
      setIsLoaded(true);
      embed.on('visualClicked', (ev: any) => {
        if ((ev.detail.visual.type as string).startsWith('Chiclet')) {
          setIsLoaded(false);
        }
      });

      embed.on('pageChanged', () => {
        setIsLoaded(false);
      });
      embed.on('rendered', () => {
        setIsLoaded(true);
      });
    });
    return unsub;
  }, []);

  if (!report || !isLoaded) {
    return null;
  }

  return <PowerBIFilter report={report} />;
}
