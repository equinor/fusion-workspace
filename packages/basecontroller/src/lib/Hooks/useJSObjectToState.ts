import { useEffect } from 'react';
import { BaseController } from '../Classes';

/**
 * Hook for subscribing to a JS object that extends BaseController
 */
export function useJsObjectToState(name: string, controller: BaseController, callback: () => void) {
    useEffect(() => {
        callback();
        const id = controller.registerListener(name, () => {
            console.log('Listener fired');
            callback();
        });
        return () => {
            controller.removeListener(id);
        };
    }, []);
}
