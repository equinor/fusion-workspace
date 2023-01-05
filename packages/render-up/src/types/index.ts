import { ReactNode } from "react";

export type NodeStore<TKey extends string = string> = {
    subscribeOutlet: (sub: Subscription) => VoidFunction;
    subscribeInlet: (key: TKey) => InletSubscription;
    getOutlet: (key: TKey) => ComponentNode | undefined;
}

/** Supported component types */
export type ComponentNode = ReactNode;

export type Subscription<TKey extends string = string> = {
    key: TKey;
    signal: () => void;
}


export type InletSubscription = {
    set: (node: ComponentNode) => void;
    unsubscribe: () => void;
}


//TODO: suspense?: boolean
export type OutletProps<TKey extends string = string> = {
    /**
     * Key matching an inlets key
     */
    renderKey: TKey;
    /**
     * Component to render if no component is found for the given key
     */
    fallback?: ReactNode;
  };