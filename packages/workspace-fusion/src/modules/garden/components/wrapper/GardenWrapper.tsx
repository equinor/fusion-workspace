import { Icon } from '@equinor/eds-core-react';
import { arrow_back_ios, arrow_forward_ios } from '@equinor/eds-icons';
import { useFilterContext } from '@equinor/workspace-filter';
import { Garden } from '@equinor/workspace-garden';
import { useWorkspace } from '../../../../lib/hooks';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';
Icon.add({ arrow_back_ios, arrow_forward_ios });

type GardenWrapperProps<TData extends Record<PropertyKey, unknown>, TFilter = undefined> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
};

export const GardenWrapper = <TData extends Record<PropertyKey, unknown>, TFilter = undefined>({
  config,
  getIdentifier,
}: GardenWrapperProps<TData, TFilter>) => {
  const { filterState } = useFilterContext();

  const { selectItem, selection, updatePayload } = useWorkspace();

  return (
    <div id="workspace_garden_wrapper" style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config['customViews']}
        visuals={config['visuals']}
        dateVariant={config['initialDateVariant'] ?? null}
        groupingKeys={config['initialGrouping']}
        timeInterval={config['initialTimeInterval'] ?? null}
        selected={selection?.id}
        getIdentifier={getIdentifier}
        getDisplayName={config['getDisplayName']}
        refState={(ref: any) => {
          updatePayload((p) => {
            return { ...p, garden: ref };
          });
        }}
        clickEvents={{
          onClickItem: (i: any) => {
            selectItem(i);
          },
        }}
      />
    </div>
  );
};
