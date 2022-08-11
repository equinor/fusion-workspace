import { generateUniqueId } from '../functions';
import { Callback, ItemChangedCallback, OnCallbackSet, SidesheetChangedCallback, SidesheetState } from '../types';

export class SidesheetController<TData, TContext> {
    /** The item currently being held by the controller */
    item: TData | undefined;
    /** Current visual state of the sidesheet */
    sidesheetState: SidesheetState = 'Closed';
    /** Function that returns the sidesheet state as a boolean */
    isSidesheetOpen = () => this.sidesheetState === 'Open';
    /**
     * Allows for sharing contextual information through the sidesheet controller
     * This context will be accessible in all callbacks supported on the sidesheet controller
     */
    context?: TContext;

    /**
     * Sets a new value for the context.
     * @param newContext New context to be set
     */
    setContext = (newContext: TContext) => {
        this.context = newContext;
    };

    private onSidesheetStateChangedCallbacks: Callback<SidesheetChangedCallback<TData>>[] = [];
    private onItemChangedCallbacks: Callback<ItemChangedCallback<TData>>[] = [];

    /** Function that both closes the sidesheet and removes the item */
    closeAndRemoveItem = () => {
        this.setSidesheetState('Closed');
        this.setItem(undefined);
    };

    /**
     * Register a callback to be called upon when the sidesheet state changes
     * @param cb A function to be called upon whenever the sidesheet state changes
     * @returns the callbacks given id and an unsubscribe method to be called upon when you want to remove the callback
     */
    onSidesheetStateChanged = (cb: SidesheetChangedCallback<TData>): OnCallbackSet => {
        const id = generateUniqueId();
        this.onSidesheetStateChangedCallbacks.push({ id, callback: cb });
        return {
            id,
            unsubscribe: () => {
                this.onSidesheetStateChangedCallbacks = this.onSidesheetStateChangedCallbacks.filter(
                    (s) => s.id !== id
                );
            },
        };
    };

    /**
     * Function for opening or closing the sidesheet
     * @param state "Open" or "Closed"
     * @param preventCallbacks If true, prevents the callbacks from being notified of this change. Dont use unless absolutely necessary
     */
    setSidesheetState = (state: SidesheetState, preventCallbacks?: boolean) => {
        /** Wont bother the callbacks if the state didnt actually change */
        if (state === this.sidesheetState) return;
        this.sidesheetState = state;

        if (!preventCallbacks) {
            this.onSidesheetStateChangedCallbacks.forEach(({ callback }) => callback(state, this));
        }
    };

    /**
     * Function for setting a new item for the sidesheet controller to hold
     * @param item The new item to be set
     * @param preventCallbacks If true, prevents the callbacks from being notified of this change. Dont use unless absolutely necessary
     */
    setItem = (item: TData | undefined, preventCallbacks?: boolean) => {
        this.item = item;
        if (!preventCallbacks) {
            this.onItemChangedCallbacks.forEach(({ callback }) => callback(item, this));
        }
    };

    /**
     * Callback to be called on whenever the item changes
     * @param cb function to call whenever the item changes
     * @returns the callbacks given id and an unsubscribe method to be called upon when you want to remove the callback
     */
    onItemChanges = (cb: ItemChangedCallback<TData>): OnCallbackSet => {
        const id = generateUniqueId();
        this.onItemChangedCallbacks.push({
            callback: cb,
            id,
        });
        return {
            id,
            unsubscribe: () => {
                this.onItemChangedCallbacks = this.onItemChangedCallbacks.filter((s) => s.id !== id);
            },
        };
    };
}
