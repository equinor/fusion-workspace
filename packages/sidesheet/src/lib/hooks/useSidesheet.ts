import { useContext } from 'react';
import { SidesheetContext } from '../components/provider/sidesheetControllerProvider';

export const useSidesheet = () => useContext(SidesheetContext);
