import { GardenItem } from '../Components/VirtualGarden/types/gardenItem';
import { GardenGroup, GardenGroups } from '../Models/data';
import { FieldSetting } from '../Models/fieldSettings';
import { CustomVirtualView, Options, StatusView } from '../Models/gardenOptions';
import { createGarden } from '../Services';

interface HighlightedNode {
    node: string | null;
    setHighlighted: (nodeIdOrCallback: (string | null) | findNodeCallback) => void;
}

/**
 * Visuals
 */
type ItemWidthCalculation<T> = (
    garden: GardenGroups<T>,
    key: string,
    customGroupByKeys?: CustomGroupByKeys
) => number;
type HighlightHorizontalColumn = (
    groupBy: string,
    customGroupByKeys: CustomGroupByKeys
) => string | undefined;
type GetCustomDescription<T> = (item: T | GardenItem<T>, controller: GardenController<T>) => string;
type GetCustomItemColor<T> = (item: T, controller: GardenController<T>) => string;
type GetGroupDescriptionFunc<T> = (item: T, groupingKey: string) => string;

type OnClickItem<T> = (item: T, controller: GardenController<T>) => void;
type OnClickGroup<T> = (item: GardenGroup<T>, controller: GardenController<T>) => void;

// Should controller have visuals?
interface Visuals<T> {
    calculateItemWidth?: ItemWidthCalculation<T>;
    rowHeight?: number;
    highlightHorizontalColumn?: HighlightHorizontalColumn;
    customViews?: CustomVirtualView<T>;
    options?: Options<T>;
    status?: StatusView<T>;
    collapseSubGroupsByDefault?: boolean;
    /** Function that returns the string of text that is to be displayed when a column is expanded */
    getCustomDescription?: GetCustomDescription<T>;
    /** Function that returns the color of the item to be displayed */
    getCustomItemColor?: GetCustomItemColor<T>;

    getGroupDescriptionFunc?: GetGroupDescriptionFunc<T>;
    customView?: CustomVirtualView<T>;
}

interface OnClickEvents<T> {
    onClickItem?: OnClickItem<T>;
    onClickGroup?: OnClickGroup<T>;
}

type Key<T> = keyof T;

type SetVerticalGroupingKeysArgs = string[];

type HorizontalGroupingAccessor<T> = keyof T | string;
const NullFunc = () => void 0;

interface GroupingKeys<T> {
    horizontalGroupingAccessor: HorizontalGroupingAccessor<T>;
    verticalGroupingKeys: string[];
}

type FieldSettings<T> = Partial<Record<string | keyof T, FieldSetting<T>>>;
type CustomGroupByKeys = Record<string, unknown>;
type CustomState = Record<string, unknown>;

export interface GardenConfig<T> {
    data: T[];
    objectIdentifier: Key<T>;
    nodeLabelCallback: NodeLabelCallback<T>;
    initialGrouping: GroupingKeys<T>;
    fieldSettings?: FieldSettings<T>;
    customGroupByKeys?: CustomGroupByKeys;
    clickEvents?: OnClickEvents<T>;
}

type NodeLabelCallback<T> = (item: T, controller: GardenController<T>) => string;

type Context<T> = T;

function defaultItemColor() {
    return '#d9e9f2';
}

/**
 * Garden controller
 * - Data
 * -
 */

/**
 * Garden view state
 * - Custom view
 * - Visuals
 * - Node label callback
 *
 *
 */

/**
 * Garden custom, bring your own stuff
 * - Custom group by keys
 * - Custom state
 */

/**
 * Add onchange handlers to everything
 */

export class GardenController<T> {
    highlightedNode: HighlightedNode = { node: null, setHighlighted: NullFunc };
    data: T[] = [];
    groups: GardenGroups<T> = [];
    grouping: GroupingKeys<T> = { horizontalGroupingAccessor: '', verticalGroupingKeys: [] };
    fieldSettings: FieldSettings<T> = {};
    nodeLabelCallback: NodeLabelCallback<T>;
    objectIdentifier: Key<T>;
    clickEvents: OnClickEvents<T> = {
        onClickGroup: NullFunc,
        onClickItem: NullFunc,
    };
    visuals: Visuals<T> = {
        getCustomItemColor: defaultItemColor,
    };
    context: Context<unknown> = {} as any;
    customGroupByKeys: CustomGroupByKeys = {};
    customState: CustomState = {};
    customView: CustomVirtualView<T> = {};

    constructor(
        {
            nodeLabelCallback,
            objectIdentifier,
            initialGrouping: { horizontalGroupingAccessor, verticalGroupingKeys },
            data,
            clickEvents,
            customGroupByKeys,
            fieldSettings,
        }: GardenConfig<T>,
        context?: Context<unknown>
    ) {
        this.objectIdentifier = objectIdentifier;
        this.nodeLabelCallback = nodeLabelCallback;
        this.data = data;
        this.fieldSettings = fieldSettings ?? {};
        this.clickEvents = clickEvents ?? {};
        this.customGroupByKeys = customGroupByKeys ?? {};
        this.grouping.horizontalGroupingAccessor = horizontalGroupingAccessor;
        this.highlightedNode.setHighlighted = this.setHighlighted;
        this.grouping.verticalGroupingKeys = verticalGroupingKeys ?? [];
        this.context = context as any;
        this.groupData();
    }

    setData = (newData: T[]) => {
        this.data = newData;
        this.groupData();
    };

    /**
     * Array of vertical grouping keys.
     * Grouped in the order of the array.
     */
    setVerticalGroupingKeys = (keys: SetVerticalGroupingKeysArgs) => {
        this.grouping.verticalGroupingKeys = keys;
        this.groupData();
    };

    /**
     * Sets the accessor to be used for grouping horizontally.
     */
    setHorizontalGroupingAccessor = (key: HorizontalGroupingAccessor<T>) => {
        this.grouping.horizontalGroupingAccessor = key;
        this.groupData();
    };

    /**
     * Function for grouping data.
     */
    groupData = () => {
        this.groups = createGarden(this);
    };

    /**
     * Return the id of the node to be selected, id must match the items objectidentifier.
     */
    setHighlighted = (nodeIdOrCallback: (string | null) | findNodeCallback) => {
        this.highlightedNode.node =
            typeof nodeIdOrCallback === 'function' ? nodeIdOrCallback(this.data) : nodeIdOrCallback;
    };

    /**
     *
     */
    setCustomState = (state: CustomState) => {
        this.customState = state;
    };
}

type findNodeCallback = <T>(data: T[]) => string | null;
