import { generateUniqueId } from '../functions';
import {
    Callback,
    ItemChangedCallback,
    OnCallbackSet,
    SidesheetChangedCallback,
    SidesheetState,
} from '../types';

export class SidesheetController<TData, TContext> {
    /** The item currently being held by the controller */
    item: TData | undefined;
    /** Current visual state of the sidesheet */
    sidesheetState: SidesheetState = 'Closed';
    /** Function that returns the sidesheet state as a boolean */
    isSidesheetOpen = () => this.sidesheetState === 'Open';

    context?: TContext;

    setContext = (newContext: TContext) => {
        this.context = newContext;
    }

    private onSidesheetStateChangedCallbacks: Callback<SidesheetChangedCallback<TData>>[] = [];
    private onItemChangedCallbacks: Callback<ItemChangedCallback<TData>>[] = [];

    /** Function that both closes the sidesheet and removes the item */
    closeAndRemoveItem = () => {
        this.setSidesheetState('Closed');
        this.setItem(undefined);
    };

    /**
     * Register a callback to be called upon when the sidesheet state changes
     * @param cb 
     * @returns 
     */
    onSidesheetStateChanged = (cb: SidesheetChangedCallback<TData>): OnCallbackSet => {
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

    /**
     * Function for opening or closing the sidesheet
     * @param state 
     * @param preventCallbacks 
     */
    setSidesheetState = (state: SidesheetState, preventCallbacks?: boolean) => {
        /** Wont bother the callbacks if the state didnt actually change */
        if(state === this.sidesheetState) return;
        this.sidesheetState = state;

        if (!preventCallbacks) {
            this.onSidesheetStateChangedCallbacks.forEach(({ callback }) => callback(state, this));
        }
    };

        /**
         * Function for setting a new item for the sidesheet controller to hold
         * @param item 
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
     * @returns 
     */
    onItemChanges = (cb: ItemChangedCallback<TData>): OnCallbackSet => {
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
