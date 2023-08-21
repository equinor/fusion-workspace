import { vi } from 'vitest';
import { gridModule } from '@equinor/workspace-fusion/grid-module';

export const getMockGridConfig = () => {
  const fakeGetRows = vi.fn();
  return { fakeGetRows, gridModule };
};
