interface OnCallbackSet<T> {
    id: string;
    unSubscribe: () => void;
    controller: SidesheetController<T>;
}

interface Callback<T> {
    id: string;
    callback: T;
}

export type SidesheetChangedCallback<T> = (
    isSidesheetOpen: boolean,
    controller: SidesheetController<T>
) => void;

export type ItemChangedCallback<T> = (
    item: T | undefined,
    controller: SidesheetController<T>
) => void;

export class SidesheetController<T> {
    item: T | undefined;
    isSidesheetOpen = false;

    onSidesheetOpenChangesCallbacks: Callback<SidesheetChangedCallback<T>>[] = [];
    onItemChangedCallbacks: Callback<ItemChangedCallback<T>>[] = [];

    onSidesheetOpen = (cb: SidesheetChangedCallback<T>): OnCallbackSet<T> => {
        const id = generateUniqueId();
        this.onSidesheetOpenChangesCallbacks.push({ id, callback: cb });
        return {
            id,
            unSubscribe: () => {
                this.onSidesheetOpenChangesCallbacks = this.onSidesheetOpenChangesCallbacks.filter(
                    (s) => s.id !== id
                );
            },
            controller: this,
        };
    };

    setSidesheetState = (open: boolean, preventCallbacks?: boolean) => {
        this.isSidesheetOpen = open;

        if (!preventCallbacks) {
            this.onSidesheetOpenChangesCallbacks.forEach(({ callback }) => callback(open, this));
        }
    };

    setItem = (item: T | undefined, preventCallbacks?: boolean) => {
        this.item = item;
        if (!preventCallbacks) {
            this.onItemChangedCallbacks.forEach(({ callback }) => callback(item, this));
        }
    };

    onItemChanges = (cb: ItemChangedCallback<T>): OnCallbackSet<T> => {
        const id = generateUniqueId();
        this.onItemChangedCallbacks.push({
            callback: cb,
            id,
        });
        return {
            id,
            controller: this,
            unSubscribe: () => {
                this.onItemChangedCallbacks = this.onItemChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
        };
    };
}
function generateUniqueId(): string {
    return (Math.random() * 16).toString();
}
