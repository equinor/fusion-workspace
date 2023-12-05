import { defineConfig } from 'tsup';

export default defineConfig({
  cjsInterop: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  entry: [
    './src/index.tsx',
    './src/lib/integrations/status-bar/index.ts',
    './src/lib/integrations/grid/index.ts',
    './src/lib/integrations/garden/index.ts',
    './src/lib/integrations/power-bi/index.ts',
    './src/lib/integrations/sidesheet/index.ts',
    './src/modules/power-bi/index.tsx',
    './src/modules/grid/index.tsx',
    './src/lib/integrations/filter/index.ts',
    './src/modules/garden/index.tsx',
  ],
});
