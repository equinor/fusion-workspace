import { IBasicFilter, PowerBI, PowerBiController, Report } from '@equinor/workspace-powerbi';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext, useEffect, useRef } from 'react';
import { FusionWorkspaceModule, useWorkspaceHeaderComponents, HeaderIcon, PowerBiBookmark, Bookmark } from '../../lib';
import { FilterConfig, PowerBiConfig, ReportMetaDataProps } from '../../lib/integrations/power-bi';
import { PowerBiHeader } from './components';
import { PowerBiPopover } from './components/PowerBiPopover';
import { PowerBiIcon } from './icons/PowerBiIcon';
import { useWorkspace } from '../../lib/hooks';

type PowerBiState = { updateState: (newState: PowerBiBookmark) => void; state: PowerBiBookmark | null };

const StateProvider = createContext<PowerBiState | null>(null);

const usePowerBiState = () => {
  const state = useContext(StateProvider);
  if (!state) {
    throw new Error('');
  }
  return state;
};

type PowerBiProviderProps = {
  children: ReactNode;
  currentBookmark?: Bookmark | null | undefined;
  powerBiOptions?: PowerBiConfig | undefined;
};

const PowerBiProvider = {
  name: 'Power-bi-provider',
  Component: (props: PowerBiProviderProps) => {
    const bookmarkRef = useRef<PowerBiState>({
      updateState(newState) {
        bookmarkRef.current.state = newState;
      },
      state: props.currentBookmark?.payload.powerBi ?? null,
    });

    return <StateProvider.Provider value={bookmarkRef.current}>{props.children}</StateProvider.Provider>;
  },
};

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
      provider: {
        name: PowerBiProvider.name,
        Component: ({ children }) => (
          <PowerBiProvider.Component currentBookmark={props.currentBookmark} powerBiOptions={props.powerBiOptions}>
            {children}
          </PowerBiProvider.Component>
        ),
      },
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
  const { updatePayload } = useWorkspace();
  const { state, updateState } = usePowerBiState();

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
    const unsub = powerBiConfig.controller.onReportReady(async (s) => {
      if (!state) return;
      await s.setPage(state.mainPage);
      if (state?.bookmarkState) {
        s.bookmarksManager.applyState(state?.bookmarkState);
      }
      unsub();
    });
  }, []);

  const reportEmbed = useRef<null | Report>(null);

  useEffect(() => {
    let handlers: null | VoidFunction = null;
    const unsub = powerBiConfig.controller.onReportReady((embed) => {
      reportEmbed.current = embed;
      const handler = async () => {
        const bookmark = await embed.bookmarksManager.capture();
        const activePage = await embed.getActivePage();
        const page = powerBiConfig.controller.activePage;

        const bookmarkPayload: PowerBiBookmark = {
          bookmarkState: bookmark.state || '',
          name: activePage.name,
          displayName: activePage.displayName,
          mainPage: page?.name ?? '',
          mainPageDisplayName: page?.displayName ?? '',
        };
        updatePayload((old) => {
          updateState(bookmarkPayload);
          return {
            ...old,
            powerBi: bookmarkPayload,
          };
        });
      };
      handlers = handler;

      embed.on('visualClicked', handler);
      embed.on('pageChanged', handler);
      embed.on('rendered', handler);
    });
    return () => {
      unsub();
      if (typeof handlers === 'function') {
        reportEmbed.current?.off('visualClicked', handlers);
        reportEmbed.current?.off('pageChanged', handlers);
        reportEmbed.current?.off('rendered', handlers);
        handlers = null;
      } else {
        console.warn('No handler found, dumping all handlers');
        reportEmbed.current?.off('visualClicked');
        reportEmbed.current?.off('pageChanged');
        reportEmbed.current?.off('rendered');
      }
    };
  }, []);

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
      controller={powerBiConfig.controller}
      getToken={powerBiConfig.getToken}
      getEmbedInfo={powerBiConfig.getEmbed}
      reportUri={powerBiConfig.reportUri}
      filters={createBasicFilter(powerBiConfig.filters)}
      ErrorComponent={powerBiConfig.ErrorComponent}
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
