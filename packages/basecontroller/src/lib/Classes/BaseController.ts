type CallbackListenerFunction = () => void;

export interface Listener {
    name: string;
    callback: CallbackListenerFunction;
    id: string;
}

export class BaseController {
    listeners: Listener[] = [];

    constructor(listeners?: Listener[]) {
        this.listeners = listeners ?? [];
    }

    registerListener(name: string, callback: CallbackListenerFunction) {
        const uniqueListenerId = (Math.random() * 16).toString();
        this.listeners.push({ callback, name, id: uniqueListenerId });
        return uniqueListenerId;
    }

    removeListener(uniqueId: string) {
        if (this.listeners.findIndex((s) => s.id === uniqueId) === -1) {
            throw 'No listener registered with that unique id';
        }
        this.listeners = this.listeners.filter((s) => s.id !== uniqueId);
    }

    /**
     * Notifies listeners that something significant has happened
     */
    notifyListeners() {
        this.listeners.forEach((s) => s.callback());
    }
}
