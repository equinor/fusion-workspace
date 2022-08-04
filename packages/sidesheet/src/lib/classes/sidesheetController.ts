import { generateUniqueId } from '../functions';
import {
    Callback,
    ItemChangedCallback,
    OnCallbackSet,
    SidesheetChangedCallback,
    SidesheetState,
} from '../types';

export class SidesheetController<T> {
    item: T | undefined;
    sidesheetState: SidesheetState = 'Closed';
    isSidesheetOpen = () => this.sidesheetState === 'Open';

    onSidesheetStateChangedCallbacks: Callback<SidesheetChangedCallback<T>>[] = [];
    onItemChangedCallbacks: Callback<ItemChangedCallback<T>>[] = [];

    closeAndRemoveItem = () => {
        this.setSidesheetState('Closed');
        this.setItem(undefined);
    };

    onSidesheetOpen = (cb: SidesheetChangedCallback<T>): OnCallbackSet => {
        const id = generateUniqueId();
        this.onSidesheetStateChangedCallbacks.push({ id, callback: cb });
        return {
            id,
            unSubscribe: () => {
                this.onSidesheetStateChangedCallbacks =
                    this.onSidesheetStateChangedCallbacks.filter((s) => s.id !== id);
            },
        };
    };

    setSidesheetState = (state: SidesheetState, preventCallbacks?: boolean) => {
        this.sidesheetState = state;

        if (!preventCallbacks) {
            this.onSidesheetStateChangedCallbacks.forEach(({ callback }) => callback(state, this));
        }
    };

    setItem = (item: T | undefined, preventCallbacks?: boolean) => {
        this.item = item;
        if (!preventCallbacks) {
            this.onItemChangedCallbacks.forEach(({ callback }) => callback(item, this));
        }
    };

    onItemChanges = (cb: ItemChangedCallback<T>): OnCallbackSet => {
        const id = generateUniqueId();
        this.onItemChangedCallbacks.push({
            callback: cb,
            id,
        });
        return {
            id,
            unSubscribe: () => {
                this.onItemChangedCallbacks = this.onItemChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
        };
    };
}
