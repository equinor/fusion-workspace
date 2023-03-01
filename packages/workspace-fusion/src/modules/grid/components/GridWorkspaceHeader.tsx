import { GridController } from '@equinor/workspace-ag-grid';
import { Filter } from '@equinor/workspace-filter';
import styled from 'styled-components';
import { useStatusBar } from '../../../lib/integrations/status-bar/hooks/useStatusBar';
import { StyledActionBar } from '../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../lib/integrations/common/components/TabNavigation';

type GridHeaderProps<TData extends Record<PropertyKey, unknown>> = {
  controller: GridController<TData>;
};

export function GridHeader<TData extends Record<PropertyKey, unknown>>({ controller }: GridHeaderProps<TData>) {
  return (
    <StyledGridHeader>
      <NavigationBar />
      <Filter />
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
