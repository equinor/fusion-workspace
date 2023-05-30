import { IBasicFilter, PowerBI, PowerBiController } from '@equinor/workspace-powerbi';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { FusionWorkspaceModule, useWorkspaceHeaderComponents, HeaderIcon } from '../../lib';
import { FilterConfig, PowerBiConfig, ReportMetaDataProps } from '../../lib/integrations/power-bi';
import { PowerBiHeader } from './components';
import { PowerBiPopover } from './components/PowerBiPopover';
import { PowerBiIcon } from './icons/PowerBiIcon';

export const powerBiModule: FusionWorkspaceModule = {
  name: 'power-bi',
  setup: (props) => {
    const powerBiConfig = props.powerBiOptions;
    if (!powerBiConfig) return;

    const controller = new PowerBiController();
    return {
      tab: {
        Component: () => <PowerBiWrapper {...powerBiConfig} controller={controller} />,
        CustomHeader: () => <PowerBiHeader controller={controller} />,
        name: 'powerbi',
        TabIcon: () => <PowerBiIcon />,
      },
      provider: { name: 'Power-Bi', Component: ({ children }) => <>{children}</> },
    };
  },
};

function createBasicFilter(filters: FilterConfig | undefined): undefined | IBasicFilter {
  if (!filters) return undefined;
  return {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: filters.target,
    filterType: 1,
    operator: 'In',
    values: filters.values,
  };
}

const PowerBiWrapper = (powerBiConfig: PowerBiConfig & { controller: PowerBiController }) => {
  const { setIcons } = useWorkspaceHeaderComponents();

  const { data } = useQuery(
    [powerBiConfig.reportUri, 'classification'],
    ({ signal }) => {
      if (powerBiConfig.getClassification) {
        return powerBiConfig.getClassification(powerBiConfig.reportUri, signal);
      }
      return null;
    },
    { enabled: !!powerBiConfig.getClassification }
  );

  useEffect(() => {
    const classification: HeaderIcon = classificationIcon(data ?? '');

    const reportMeta: HeaderIcon | null = powerBiConfig.ReportMetaData
      ? reportMetaButton(powerBiConfig.ReportMetaData, powerBiConfig.reportUri)
      : null;

    setIcons((icons) => (reportMeta !== null ? [classification, reportMeta, ...icons] : [classification, ...icons]));

    return () => {
      const icons = [classification.name, reportMeta?.name];
      setIcons((i) => i.filter((ics) => !icons.includes(ics.name)));
    };
  }, [powerBiConfig.ReportMetaData, data]);

  return (
    <PowerBI
      getErrorMessage={powerBiConfig.getErrorMessage}
      controller={powerBiConfig.controller}
      getToken={powerBiConfig.getToken}
      getEmbedInfo={powerBiConfig.getEmbed}
      reportUri={powerBiConfig.reportUri}
      filters={createBasicFilter(powerBiConfig.filters)}
    />
  );
};

const classificationIcon = (classification: string): HeaderIcon => ({
  Icon: () => <>{classification}</>,
  name: 'report_classification',
  placement: 'left',
  type: 'text',
});

const reportMetaButton = (Comp: (props: ReportMetaDataProps) => JSX.Element, reportUri: string): HeaderIcon => ({
  type: 'button',
  name: 'report_metadata',
  placement: 'left',
  Icon: ({ anchor }) => <PowerBiPopover reportUri={reportUri} anchor={anchor} ReportMetaData={Comp} />,
});
