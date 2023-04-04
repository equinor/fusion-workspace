import { Filter, FilterDataSource, useFilterContext } from '@equinor/workspace-filter';
import styled from 'styled-components';
import { useStatusBar } from '../../../lib/integrations/status-bar/hooks/useStatusBar';
import { StyledActionBar } from '../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../lib/integrations/common/components/TabNavigation';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
  dataSource?: FilterDataSource;
};

export function GridHeader<TData extends Record<PropertyKey, unknown>>({ dataSource }: GridHeaderProps<TData>) {
  return (
    <StyledGridHeader>
      <NavigationBar />
      {dataSource && <Filter dataSource={dataSource} />}
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
