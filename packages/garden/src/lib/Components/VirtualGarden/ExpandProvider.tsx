import { createContext, PropsWithChildren, useReducer } from 'react';
import { GardenItem } from './types/gardenItem';
import { getDescriptionWidth } from './utils';
type Expanded = {
    isExpanded: boolean;
    index: number;
};
type ExpandedItems = Record<string, Expanded>;
type State = {
    expandedColumns: ExpandedItems;
    widths: number[];
};
export enum ActionType {
    EXPAND_COLUMN,
}

type ExpandColumn<T extends unknown = any> = {
    key: string;
    index: number;
    descriptionData: GardenItem<T>[] | null;
    type: ActionType.EXPAND_COLUMN;
    customDescription?: (item: T | GardenItem<T>) => string;
};

type Action = ExpandColumn;
const expandReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.EXPAND_COLUMN: {
            let width = getDescriptionWidth(action.descriptionData, action.customDescription);
            //Edge case here: if all subgroups are collapsed, the width will be
            // 0 since no description data. But if you expand column first and collapse
            // all subgroups, the column wont be resized
            if (width === 0) {
                return state;
            }
            if (state.expandedColumns && state.expandedColumns[action.key]) {
                const currWidths = [...state.widths];
                currWidths[action.index] = state.expandedColumns[action.key].isExpanded
                    ? currWidths[action.index] - width
                    : currWidths[action.index] + width;
                return {
                    ...state,
                    expandedColumns: {
                        ...state.expandedColumns,
                        [action.key]: {
                            ...state.expandedColumns[action.key],
                            isExpanded: !state.expandedColumns[action.key].isExpanded,
                        },
                    },
                    widths: currWidths,
                };
            } else {
                const currWidths = [...state.widths];
                currWidths[action.index] = currWidths[action.index] + width;
                return {
                    ...state,
                    expandedColumns: {
                        ...state.expandedColumns,
                        [action.key]: {
                            isExpanded: true,
                            index: action.index,
                        },
                    },
                    widths: currWidths,
                };
            }
        }

        default:
            return { expandedColumns: {}, widths: [] };
    }
};

type DispatchAction = (action: Action) => void;
const ExpandContext = createContext<State>({
    expandedColumns: {},
    widths: [],
});

function createExpandDispatchContext() {
    return createContext<DispatchAction | undefined>(undefined);
}
const ExpandDispatchContext = createExpandDispatchContext();

type ExpandProviderProps = {
    initialWidths: number[];
};

const ExpandProvider = (props: PropsWithChildren<ExpandProviderProps>) => {
    const { initialWidths, children } = props;

    const [state, dispatch] = useReducer(expandReducer, {
        expandedColumns: {},
        widths: initialWidths,
    });

    return (
        <ExpandContext.Provider value={state}>
            <ExpandDispatchContext.Provider value={dispatch}>
                {children}
            </ExpandDispatchContext.Provider>
        </ExpandContext.Provider>
    );
};

export { ExpandProvider, ExpandContext, ExpandDispatchContext };
