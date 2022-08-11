import { Callback } from '../types';
import { generateUniqueId } from './generateUniqueId';

export function makeCallback<TCallback>(callback: TCallback): Callback<TCallback> {
    return {
        id: generateUniqueId(),
        callback,
    };
}
