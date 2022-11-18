import { GetIdentifier } from '../classes';
import { GardenGroup } from './gardenGroup';
import { GroupingKeys } from './keys';

export type GardenProp<
	TData extends Record<PropertyKey, unknown>,
	_ExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	/** Will re-render when nodes change */
	useSelectedNodes: () => [selectedNodes: string[], setSelectedNodes: (nodes: string[]) => void];
	/** Will re-render when filtered data changes */
	useData: () => TData[];
	/** Will re-render when grouping changes */
	useGroups: () => GardenGroup<TData>[];
	/** Will re-render when grouping changes */
	useCurrentGroupingKeys: () => GroupingKeys<TData>;
	getDisplayName: (item: TData) => string;
	getIdentifier: GetIdentifier<TData>;
	onClickItem: (item: TData) => void;
	useContext: () => TContext | undefined;
	/** Will rerender when context changes */
	/** Will re-render when keys change */
	useCustomGroupByKeys: () => TCustomGroupByKeys | undefined;
	getDescription: (item: TData) => string | undefined;
	getItemColor: (item: TData) => string | undefined;
};
