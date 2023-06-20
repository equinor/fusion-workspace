import { FilterState, useFilterContext } from '@equinor/workspace-filter';
import { BookmarkRef, Garden } from '@equinor/workspace-garden';
import { useEffect, useRef, useState } from 'react';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';
import { HeaderIcon, useWorkspaceHeaderComponents } from '../../../../lib';
import { Icon } from '@equinor/eds-core-react';
import { more_vertical } from '@equinor/eds-icons';
import { BehaviorSubject } from 'rxjs';
import { GardenPopoverItem } from '../workspace-header/GardenViewSettings';
import { useWorkspaceController } from '../../../../lib/context/WorkspaceControllerContext';
Icon.add({ more_vertical });

type GardenWrapperProps<TData extends Record<PropertyKey, unknown>, TFilter = undefined> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
};

export const GardenWrapper = <TData extends Record<PropertyKey, unknown>, TFilter = undefined>({
  config,
  getIdentifier,
}: GardenWrapperProps<TData, TFilter>) => {
  const { filterState } = useFilterContext();
  const { selected, setSelected } = useWorkspaceController();
  const bookmarkRef = useRef<BookmarkRef<TData> | null>(null);
  const [groupingKeys, setGroupingKeys] = useState<string[]>([
    config.initialGrouping.horizontalGroupingAccessor.toString(),
    ...(config.initialGrouping.verticalGroupingKeys ?? []),
  ]);

  const groupingKeys$ = useRef(new BehaviorSubject(groupingKeys));

  useEffect(() => {
    /**
     * You might not need an effect
     * Yes you do!
     */
    groupingKeys$.current.next(groupingKeys);
  }, [groupingKeys]);

  const { setIcons } = useWorkspaceHeaderComponents();

  useEffect(() => {
    const icon: HeaderIcon = {
      Icon: ({ anchor }) => (
        <GardenPopoverItem
          config={config as GardenConfig<any, FilterState>}
          filterState={filterState}
          anchor={anchor}
          groupingKeys$={groupingKeys$.current}
          setGroupingKeys={setGroupingKeys}
        />
      ),
      name: 'garden-grouping',
      placement: 'right',
      type: 'button',
    };
    setIcons((s) => [...s, icon]);

    return () => {
      setIcons((s) => s.filter((y) => y.name !== icon.name));
    };

    /**
     * Dep array should contain grouping keys but that would result in the popover closing everytime you change the key, have to pass as observable to prevent this behaviour
     */
  }, []);

  return (
    <div id="workspace_garden_wrapper" style={{ height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        bookmarkRef={bookmarkRef}
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config.customViews}
        visuals={config.visuals}
        getIdentifier={getIdentifier}
        groupingKeys={groupingKeys}
        getDisplayName={config.getDisplayName}
        clickEvents={{
          onClickItem: (i) => {
            setSelected({ id: getIdentifier(i), item: i as TData });
          },
        }}
      />
    </div>
  );
};
