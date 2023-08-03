import { useQuery } from '@tanstack/react-query';
import { StatusBarConfig } from '../types/workspaceConfig';
import { useFilterContext } from '@equinor/workspace-filter';
import { StatusBar } from './StatusBar';
import { KPISkeletons } from './StyledSkeletons';

type StatusBarWrapperProps = {
  config: StatusBarConfig;
};

export function StatusBarWrapper({ config }: StatusBarWrapperProps) {
  const { filterState } = useFilterContext();

  const { data, isLoading } = useQuery(['kpis', filterState], (a) => config(filterState, a.signal), {
    keepPreviousData: true,
  });

  if (isLoading || !data) {
    return <KPISkeletons />;
  }
  return <StatusBar items={data} />;
}
