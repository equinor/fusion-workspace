/**
 * Callback that passes destroy function from service to instantiator
 * Useful for not leaking the destroy function to all consumers other than creator
 */
export type ServiceCtor = (destroy: VoidFunction) => void;
