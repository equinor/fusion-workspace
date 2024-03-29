import { Filter, FilterDataSource } from '@equinor/workspace-filter';
import styled from 'styled-components';
import { useStatusBar } from '../../../lib/integrations/status-bar/hooks/useStatusBar';
import { StyledActionBar } from '../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../lib/integrations/common/components/TabNavigation';
import { SidesheetConfig } from '../../../lib/integrations/sidesheet';
import { useCreateButton } from '../../../lib/hooks/useCreateButton';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
  dataSource?: FilterDataSource;
  sidesheetConfig?: SidesheetConfig<TData>;
};

export function GridHeader<TData extends Record<PropertyKey, unknown>>({
  dataSource,
  sidesheetConfig,
}: GridHeaderProps<TData>) {
  useCreateButton(sidesheetConfig);
  return (
    <StyledGridHeader>
      <NavigationBar />
      {dataSource && <Filter />}
    </StyledGridHeader>
  );
}

const StyledGridHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NavigationBar = () => {
  const StatusBar = useStatusBar();
  return (
    <StyledActionBar>
      <div>{StatusBar && <StatusBar />}</div>
      <TabNavigation />
    </StyledActionBar>
  );
};
