export interface IEventHub {
	publish<T>(key: string, message: T): void;
	registerListener<T>(key: string, handler: (message: T) => void): () => void;
}

export class EventHub implements IEventHub {
	publish<T>(key: string, message: T): void {
		const event = new CustomEvent(key, { detail: message });
		window.dispatchEvent(event);
	}

	registerListener<T>(key: string, handler: (message: T) => void): () => void {
		const eventHandler = (e: Event) => {
			const customEvent = e as CustomEvent;
			const message = customEvent.detail as T;
			handler(message);
		};
		window.addEventListener(key, eventHandler);
		return () => window.removeEventListener(key, eventHandler);
	}
}
