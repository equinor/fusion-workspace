import { Callback, OnCallbackSet } from '../../types';
import { generateUniqueId } from './generateUniqueId';

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
