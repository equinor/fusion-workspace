import { vi } from 'vitest';

export function getMockStatusBar() {
  const fakeStatusBar = vi.fn();
  return {
    statusbarConfig: async (filters) => {
      fakeStatusBar();
      return [{ title: 'abc', value: '2' }];
    },
    fakeStatusBar,
  };
}
