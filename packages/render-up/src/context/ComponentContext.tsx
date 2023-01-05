import { createContext, ReactNode, useContext, useRef } from "react";
import { NodeStore } from "../types";
import { createStore } from "../utils/createStore";

export const NodeStoreContext = createContext<NodeStore | null>(null);

type NodeStoreProviderProps = {
  /**
   * Children to share the context with
   */
  children: ReactNode;
  /**
   * re-uses the parent nodestore if there is one.
   * Be wary of naming collisions
   * Disabled by default
   */
  contextMerge?: boolean;
};

export const NodeStoreProvider = ({
  children,
  contextMerge,
}: NodeStoreProviderProps) => {
  const existingStore = useContext(NodeStoreContext);

  const store = useRef(
    contextMerge && existingStore ? existingStore : createStore()
  );
  //TODO: Maybe just render children directly if parent store is accessible?
  //Probably doesnt matter
  return (
    <NodeStoreContext.Provider value={store.current}>
      {children}
    </NodeStoreContext.Provider>
  );
};
