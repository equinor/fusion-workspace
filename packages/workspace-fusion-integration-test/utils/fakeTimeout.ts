export const fakeTimeout = (timeout?: number) => new Promise<void>((res) => setTimeout(() => res(), timeout ?? 500));
