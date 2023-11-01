import { Filter, FilterDataSource } from '@equinor/workspace-filter';
import styled from 'styled-components';
import { StyledActionBar } from '../../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../../lib/integrations/common/components/TabNavigation';
import { useStatusBar } from '../../../../lib/integrations/status-bar';
import { useCreateButton } from '../../../../lib/hooks/useCreateButton';
import { SidesheetConfig } from '../../../../lib/integrations/sidesheet';

type GardenWorkspaceHeaderProps<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext
> = {
  dataSource?: FilterDataSource;
  sidesheetConfig?: SidesheetConfig<TData>;
};

export function GardenWorkspaceHeader<
  TData extends Record<PropertyKey, unknown>,
  TExtendedFields extends string,
  TCustomGroupByKeys extends Record<PropertyKey, unknown>,
  TContext
>({ dataSource, sidesheetConfig }: GardenWorkspaceHeaderProps<TData, TExtendedFields, TCustomGroupByKeys, TContext>) {
  useCreateButton(sidesheetConfig);
  return (
    <StyledGardenHeader>
      <NavigationBar />
      {dataSource && <Filter dataSource={dataSource} />}
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
