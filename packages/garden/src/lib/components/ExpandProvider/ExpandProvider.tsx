import { createContext, PropsWithChildren, useReducer } from 'react';
import { defaultGardenPackageWidth } from '../../hooks';

type State = {
  expandedColumns: number[];
  widths: number[];
};
export enum ActionType {
  EXPAND_COLUMN,
}

type ExpandColumn = {
  index: number;
  type: ActionType.EXPAND_COLUMN;
};

type Action = ExpandColumn;
const expandReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.EXPAND_COLUMN: {
      if (state.expandedColumns.findIndex((s) => s === action.index) !== -1) {
        const newWidths = [...state.widths];
        newWidths[action.index] = defaultGardenPackageWidth;
        return {
          expandedColumns: state.expandedColumns.filter((s) => s !== action.index),
          widths: newWidths,
        };
      } else {
        const newWidths = [...state.widths];
        newWidths[action.index] = 500;
        return {
          expandedColumns: [...state.expandedColumns, action.index],
          widths: newWidths,
        };
      }
    }

    default:
      return { expandedColumns: [], widths: [] };
  }
};

type DispatchAction = (action: Action) => void;
const ExpandContext = createContext<State>({
  expandedColumns: [],
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
    expandedColumns: [],
    widths: initialWidths,
  });

  return (
    <ExpandContext.Provider value={state}>
      <ExpandDispatchContext.Provider value={dispatch}>{children}</ExpandDispatchContext.Provider>
    </ExpandContext.Provider>
  );
};

export { ExpandProvider, ExpandContext, ExpandDispatchContext };
