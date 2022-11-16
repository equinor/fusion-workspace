import { GetIdentifier } from '../classes';
import { GetDisplayName } from './callbacks';
import { GardenGroup } from './gardenGroup';
import { GroupingKeys } from './keys';

export type GardenProp<
	TData extends Record<PropertyKey, unknown>,
	ExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never,
	TCustomState extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>
> = {
	useSelectedNodes: () => [selectedNodes: string[], setSelectedNodes: (nodes: string[]) => void];
	useData: () => TData[];
	useGroups: () => GardenGroup<TData>[];
	useCurrentGroupingKeys: () => GroupingKeys<TData>;
	getDisplayName: GetDisplayName<TData>;
	getIdentifier: GetIdentifier<TData>;
	onClickItem: (item: TData) => void;
	useContext: () => TContext | undefined;
	useCustomGroupByKeys: () => TCustomGroupByKeys | undefined;
};
