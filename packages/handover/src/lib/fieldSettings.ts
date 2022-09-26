import { FieldSettings } from '@equinor/garden';
import { Handover } from './components/types';
import { getProgressKey, sortByNumber } from './utils';

export type ExtendedGardenFields = 'RFCC' | 'TAC' | 'RFOC' | 'DCC' | 'RFRC';
export const handoverFieldSettings: FieldSettings<Handover, ExtendedGardenFields> = {
	//TODO: Fix extended fields
	// RFCC: { label: 'RFCC', getKey: getDateKey, getColumnSort: sortByNumber },
	// TAC: { label: 'TAC', getKey: getDateKey, getColumnSort: sortByNumber },
	// RFOC: { label: 'RFOC', getKey: getDateKey, getColumnSort: sortByNumber },
	// DCC: { label: 'DCC', getKey: getDateKey, getColumnSort: sortByNumber },
	// RFRC: { label: 'RFRC', getKey: getDateKey, getColumnSort: sortByNumber },
	responsible: { label: 'Comm Pkg Responsible' },
	area: { label: 'Comm Pkg Area' },
	phase: { label: 'Comm Pkg Phase' },
	progress: { label: 'Comm Pkg Progress', getKey: getProgressKey, getColumnSort: sortByNumber },
	system: { label: 'System' },
	priority1: { label: 'Commissioning Priority 1' },
	priority2: { label: 'Commissioning Priority 2' },
	priority3: { label: 'Commissioning Priority 3' },
};
