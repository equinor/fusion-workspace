import { GridController } from '@equinor/workspace-ag-grid';
import { useStatusBar } from '../../../status-bar';
import { Filter } from '@equinor/workspace-filter';

import styled from 'styled-components';
import { TabNavigation } from '../../../common/components/TabNavigation';
import { StyledActionBar } from '../../../../components/Header/actionBar.styles';

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
