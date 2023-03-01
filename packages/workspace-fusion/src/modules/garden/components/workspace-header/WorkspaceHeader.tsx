import { Filter } from '@equinor/workspace-filter';
import { GardenController } from '@equinor/workspace-garden';
import styled from 'styled-components';
import { StyledActionBar } from '../../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../../lib/integrations/common/components/TabNavigation';
import { useStatusBar } from '../../../../lib/integrations/status-bar';

type GardenWorkspaceHeaderProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
> = {
  controller: GardenController<TData, TExtendedFields, TCustomGroupByKeys, TContext>;
};

export function GardenWorkspaceHeader<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown>
>({ controller }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>) {
  return (
    <StyledGardenHeader>
      <NavigationBar />
      <Filter />
    </StyledGardenHeader>
  );
}

const StyledGardenHeader = styled.div`
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
