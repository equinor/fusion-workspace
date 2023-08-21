import { PropsWithChildren, createContext, useCallback } from 'react';
import { GardenDataSource } from '../components';
import {
  GetDisplayName,
  Visuals,
  CustomVirtualViews,
  OnClickEvents,
  OnClickItem,
  OnClickGroup,
  GetIdentifier,
} from '../types';
import { useGarden } from '../hooks/useGarden';
import { DefaultGardenItem, DefaultGroupView, DefaultHeaderView } from '../components/defaultComponents';

type GardenConfig<TData extends Record<PropertyKey, unknown>, TContext> = {
  dataSource: GardenDataSource<TContext>;
  context?: TContext;
  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  visuals?: Visuals<TData>;
  customViews?: CustomVirtualViews<TData>;
  clickEvents?: OnClickEvents<TData>;
};

export const GardenConfigContext = createContext<null | GardenConfigContext<any, any>>(null);

type GardenConfigContext<TData extends Record<PropertyKey, unknown>, TContext> = {
  onClickItem: OnClickItem<TData>;
  onClickGroup: OnClickGroup<TData>;
  components: Required<CustomVirtualViews<TData>>;
  getDisplayName: GetDisplayName<TData>;
  getIdentifier: GetIdentifier<TData>;
  dataSource: GardenDataSource<TContext>;
  context?: TContext;
  visuals: Visuals<TData>;
};

export function GardenConfigProvider<TData extends Record<PropertyKey, unknown>, TContext>(
  props: PropsWithChildren<GardenConfig<TData, TContext>>
) {
  const {
    selectionService: { selectNode },
  } = useGarden();

  const onClickItem: OnClickItem<TData> = useCallback(
    (item) => {
      selectNode(item);
      props.clickEvents?.onClickItem && props.clickEvents.onClickItem(item);
    },
    [selectNode, props.clickEvents?.onClickItem]
  );

  const onClickGroup: OnClickGroup<TData> = useCallback(
    (item) => {
      props.clickEvents?.onClickGroup && props.clickEvents.onClickGroup(item);
    },
    [props.clickEvents?.onClickGroup]
  );

  const customItemView = props.customViews?.customItemView ?? DefaultGardenItem;
  const customHeaderView = props.customViews?.customHeaderView ?? DefaultHeaderView;
  const customGroupView = props.customViews?.customGroupView ?? DefaultGroupView;

  return (
    <GardenConfigContext.Provider
      value={{
        dataSource: props.dataSource,
        getDisplayName: props.getDisplayName,
        getIdentifier: props.getIdentifier,
        onClickGroup,
        onClickItem,
        components: {
          customItemView,
          customGroupView,
          customHeaderView,
        },
        context: props.context,
        visuals: props.visuals ?? {},
      }}
    >
      {props.children}
    </GardenConfigContext.Provider>
  );
}
