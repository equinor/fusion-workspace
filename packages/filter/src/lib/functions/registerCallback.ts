import { Callback, OnCallbackSet } from '../classes';

export function registerCallback<TCallback>(
    cb: TCallback,
    list: Callback<TCallback>[],
    unsub: (id: string) => void
): OnCallbackSet {
    const id = generateUniqueId();
    list.push({ callback: cb, id });
    return {
        id,
        unSubscribe: () => unsub(id),
    };
}

function generateUniqueId() {
    return (Math.random() * 16).toString();
}
