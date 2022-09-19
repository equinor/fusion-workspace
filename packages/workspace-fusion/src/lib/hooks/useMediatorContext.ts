import { useContext } from 'react';
import { MediatorContext } from '../components/provider/MediatorProvider';
import { FusionMediator } from '../types';

export const useWorkspace = <TData>(): FusionMediator<TData> => useContext(MediatorContext) as any;
