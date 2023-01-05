import { useContext } from "react";
import { NodeStoreContext } from "../context";

const UnreachableContextMessage = `
Context invoked out of bounds
Did you forget to wrap your application in NodeStoreProvider?
`
export const useNodeStore = () => {
    const context = useContext(NodeStoreContext);
    if (!context) {
        throw new Error(UnreachableContextMessage);
    }
    return context;
};