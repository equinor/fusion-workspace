import { ChangeEvent } from '../types';

export const postChangeEvent = (msg: ChangeEvent) => window.postMessage(msg);
