import { createObservableProxy } from '@equinor/observable-proxy';

export const createUrlService = () => createObservableProxy({ url: new URL(window.location.href) });
