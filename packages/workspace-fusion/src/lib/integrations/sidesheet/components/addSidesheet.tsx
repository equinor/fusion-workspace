import { SidesheetConfig } from '../types';
import { SidesheetAdvancedWrapper } from './wrapper';
import { SidesheetSimpleWrapper } from './wrapper/SidesheetSimpleWrapper';

export function addSidesheet<TData extends Record<PropertyKey, unknown>>(
  config: SidesheetConfig<TData> | undefined
): (() => JSX.Element) | undefined {
  if (!config || Object.keys(config).length === 0) return;

  if (config.type === 'custom') {
    return () => <SidesheetAdvancedWrapper Config={config.Component} />;
  }
  if (config.type === 'default') {
    return () => <SidesheetSimpleWrapper DetailsSidesheet={config.DetailsSidesheet} />;
  }
  return;
}
