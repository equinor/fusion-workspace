import { useState, ReactNode, useSyncExternalStore } from "react";
import { useNodeStore } from "./useNodeStore";

export const useOutlet = <TKey extends string = string>(key: TKey) => {
    const store = useNodeStore();
    const [node, setNode] = useState<ReactNode>(store.getOutlet(key) ?? null)

    const snapshot = () => store.getOutlet(key);
    const handler = () => setNode(snapshot())

    useSyncExternalStore<ReactNode>(
        () => store.subscribeOutlet({ key, signal: handler}),
        snapshot,
        snapshot
    );

    return node;
}

