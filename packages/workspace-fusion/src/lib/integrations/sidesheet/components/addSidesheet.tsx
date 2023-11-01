import { SidesheetConfig } from '../types';
import { SidesheetSimpleWrapper } from './wrapper/SidesheetSimpleWrapper';

export function addSidesheet<TData extends Record<PropertyKey, unknown>>(
  config: SidesheetConfig<TData> | undefined
): (() => JSX.Element) | undefined {
  if (!config || Object.keys(config).length === 0) return;

  if (config.type === 'default') {
    return () => (
      <SidesheetSimpleWrapper DetailsSidesheet={config.DetailsSidesheet} CreateSidesheet={config.CreateSidesheet} />
    );
  }
  return;
}
