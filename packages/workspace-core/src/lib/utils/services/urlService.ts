import { createObservableProxy } from '@equinor/workspace-observable-proxy';

export const createUrlService = () => createObservableProxy({ url: new URL(window.location.href) });
